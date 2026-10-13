#!/usr/bin/env python3
import json
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,PngImagePlugin
ROOT=Path(__file__).resolve().parents[2];m=json.loads((ROOT/'publishing/2026-10-13/manifest.json').read_text());bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf';mono='/System/Library/Fonts/SFNSMono.ttf';pal=[('#06111F','#22C55E','#60A5FA'),('#071A18','#34D399','#FBBF24'),('#111827','#38BDF8','#A3E635'),('#1A1033','#A78BFA','#34D399'),('#0C1B33','#2DD4BF','#FB7185'),('#101827','#4ADE80','#F59E0B'),('#082F49','#22D3EE','#A3E635'),('#172033','#60A5FA','#FACC15'),('#052E2B','#2DD4BF','#F472B6'),('#18181B','#22C55E','#93C5FD'),('#172554','#38BDF8','#86EFAC'),('#1E1B4B','#818CF8','#4ADE80'),('#0F172A','#22C55E','#FBBF24'),('#082F49','#2DD4BF','#C4B5FD'),('#1F2937','#60A5FA','#A3E635'),('#022C22','#34D399','#FCA5A5'),('#111827','#38BDF8','#FDE047')]
def wrap(d,text,font,width):
 lines=[];cur=''
 for word in text.split():
  trial=f'{cur} {word}'.strip()
  if d.textbbox((0,0),trial,font=font)[2]<=width:cur=trial
  else:
   if cur:lines.append(cur)
   cur=word
 if cur:lines.append(cur)
 return lines
items=[(x,'BLOG',(1672,941))for x in m['blog']]+[(x,'RESEARCH',(1536,1024))for x in m['research']]
for i,(a,kind,size) in enumerate(items):
 w,h=size;bg,g,b=pal[i];im=Image.new('RGB',size,bg);d=ImageDraw.Draw(im);px=int(w*.72);py=65+(i%4)*22;d.rounded_rectangle((px,py,w+90,py+int(h*.48)),34,outline=b,width=12)
 for row in range(5):
  y=py+65+row*64;length=215+((i*47+row*83)%280);d.rounded_rectangle((px+52,y,px+52+length,y+18),9,fill=g if row%2==0 else b)
 for n in range(3):d.ellipse((px+52+n*45,py+28,px+72+n*45,py+48),fill=b if n%2 else g)
 badge=255 if kind=='BLOG' else 360;d.rounded_rectangle((78,70,78+badge,134),26,fill=g);d.text((112,87),f'{kind}  //  OCT 13',font=ImageFont.truetype(bold,27),fill=bg)
 sz=72 if kind=='BLOG' else 64
 while True:
  f=ImageFont.truetype(bold,sz);lines=wrap(d,a['title'],f,int(w*.66))
  if len(lines)<=4:break
  sz-=3
 y=205
 for line in lines:d.text((78,y),line,font=f,fill='white');y+=sz+17
 fy=h-128;d.line((78,fy,w-78,fy),fill=b,width=5);ff=ImageFont.truetype(mono,27);d.text((78,fy+43),'OUTSOURCEDPROGRAMMERS.COM',font=ff,fill=g);d.text((w-365,fy+43),f'OCT13 // {i+1:02d}',font=ff,fill=b)
 target=ROOT/'public'/a['thumbnail'].lstrip('/');target.parent.mkdir(parents=True,exist_ok=True);meta=PngImagePlugin.PngInfo();meta.add_text('Title',a['title']);meta.add_text('Section',kind);im.save(target,'PNG',optimize=True,pnginfo=meta)
print('Rendered 12 Blog 1672x941 and 5 Research 1536x1024 exact-title PNG thumbnails')
