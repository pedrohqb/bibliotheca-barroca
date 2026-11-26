import json, re, sys
S = sys.argv[1]
t = open(f'{S}/web/ci_hocr_searchtext.txt').read(); idx = json.load(open(f'{S}/web/ci_hocr_pageindex.json'))
def roman(s):
    s = s.replace('l','I').replace('1','I').replace('i','I').replace('m','III').replace('n','II').replace('u','II').upper()
    if not re.fullmatch(r'[LXVI]+', s): return None
    v = {'L':50,'X':10,'V':5,'I':1}; tot = 0
    for k,c in enumerate(s):
        x = v[c]; tot += -x if k+1 < len(s) and v[s[k+1]] > x else x
    return tot
H = {}
for L,(a,b,*_) in enumerate(idx):
    segs = t[a:b].split('\n')[:4]
    for sg in segs:
        m = re.match(r'^\s*([LXVIxvilmnu1]{1,9})\s+([\d][\d\s\.,]*)', sg.strip())
        if m:
            bk = roman(m.group(1)); tits = [int(x) for x in re.findall(r'\d+', m.group(2)) if int(x) < 60]
            if bk and 1 <= bk <= 50 and tits: H[L] = (bk, tits); break
json.dump(H, open(f'{S}/headers.json','w'))
print(len(H)); print(list(H.items())[:15]); print([ (k,v) for k,v in H.items() if 780<k<800])
