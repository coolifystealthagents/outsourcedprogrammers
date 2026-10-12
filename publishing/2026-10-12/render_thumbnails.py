#!/usr/bin/env python3
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT=Path(__file__).resolve().parents[2]
manifest=json.loads((Path(__file__).with_name('manifest.json')).read_text())
bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
mono='/System/Library/Fonts/SFNSMono.ttf'
if not Path(mono).exists(): mono='/System/Library/Fonts/Monaco.ttf'
palettes=[('#06111F','#22C55E','#60A5FA'),('#071A18','#34D399','#FBBF24'),('#111827','#38BDF8','#A3E635'),('#1A1033','#A78BFA','#34D399'),('#0C1B33','#2DD4BF','#FB7185'),('#101827','#4ADE80','#F59E0B'),('#082F49','#22D3EE','#A3E635'),('#172033','#60A5FA','#FACC15'),('#052E2B','#2DD4BF','#F472B6'),('#18181B','#22C55E','#93C5FD'),('#172554','#38BDF8','#86EFAC'),('#1E1B4B','#818CF8','#4ADE80'),('#0F172A','#22C55E','#FBBF24'),('#082F49','#2DD4BF','#C4B5FD'),('#1F2937','#60A5FA','#A3E635'),('#022C22','#34D399','#FCA5A5'),('#111827','#38BDF8','#FDE047')]

def wrap(draw,text,font,width):
    lines=[]; current=''
    for word in text.split():
        candidate=f'{current} {word}'.strip()
        if draw.textbbox((0,0),candidate,font=font)[2] <= width: current=candidate
        else:
            if current: lines.append(current)
            current=word
    if current: lines.append(current)
    return lines

items=[(x,'BLOG',(1672,941)) for x in manifest['blog']]+[(x,'RESEARCH',(1536,1024)) for x in manifest['research']]
for idx,(item,kind,size) in enumerate(items):
    width,height=size; bg,green,blue=palettes[idx]
    image=Image.new('RGB',size,bg); draw=ImageDraw.Draw(image)
    # A unique deterministic terminal/pull-request panel for each article.
    panel_x=int(width*.72); panel_y=65+(idx%4)*22
    draw.rounded_rectangle((panel_x,panel_y,width+90,panel_y+int(height*.48)),radius=34,outline=blue,width=12)
    for row in range(5):
        y=panel_y+65+row*64
        length=215+((idx*47+row*83)%280)
        draw.rounded_rectangle((panel_x+52,y,panel_x+52+length,y+18),radius=9,fill=green if row%2==0 else blue)
    for n in range(3): draw.ellipse((panel_x+52+n*45,panel_y+28,panel_x+72+n*45,panel_y+48),fill=blue if n%2 else green)
    badge_w=255 if kind=='BLOG' else 340
    draw.rounded_rectangle((78,70,78+badge_w,134),radius=26,fill=green)
    draw.text((112,87),f'{kind}  //  OCT 12',font=ImageFont.truetype(bold,27),fill=bg)
    title_size=72 if kind=='BLOG' else 66
    if len(item['title'])>72: title_size-=7
    title_font=ImageFont.truetype(bold,title_size)
    lines=wrap(draw,item['title'],title_font,int(width*.66))
    y=205
    for line in lines:
        draw.text((78,y),line,font=title_font,fill='white'); y+=title_size+17
    footer_y=height-128
    draw.line((78,footer_y,width-78,footer_y),fill=blue,width=5)
    footer=ImageFont.truetype(mono,27)
    draw.text((78,footer_y+43),'OUTSOURCEDPROGRAMMERS.COM',font=footer,fill=green)
    draw.text((width-365,footer_y+43),'REVIEW // EVIDENCE',font=footer,fill=blue)
    target=ROOT/'public'/item['thumbnail'].lstrip('/')
    target.parent.mkdir(parents=True,exist_ok=True)
    image.save(target,'PNG',optimize=True)
    with Image.open(target) as check: assert check.size==size
print('Rendered 12 Blog 1672x941 and 5 Research 1536x1024 exact-title thumbnails')
