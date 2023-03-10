console.dir(document);
//Base code
const wrap_div = document.createElement('div');
document.body.appendChild(wrap_div).classList.add('wrap');

const header = document.createElement('h1');
document.querySelector('div.wrap').appendChild(header).classList.add('header_text');
header.innerText = 'Your Handmade Style Page';

const paragraph = document.createElement('div');
document.querySelector('div.wrap').appendChild(paragraph).classList.add('paragraph_text');
paragraph.innerText = 'Your links to web site : ';


//Prompts for user
const bg_color = prompt("Take a color for your background in #HexCod type! For example: #FFDDE4");
const font_type = prompt("Write the font type on the page,for example: Pacifico");
const h1_align = prompt("Take the alignment for the h1 heading,for example: center");
const link_bg = prompt("Write the background color for the link paragraph in #HexCod type! For example: #DEB3E0");
const link_text_color = prompt("Write the text color for the link paragraph in #HexCod type! For example: #FEECD6");
const div_text_style = prompt("Take the color, size, and fond width of the text in the div element. For example: #726e9d 20px 3px");
const list_style = prompt("Write the bullet type for the bulleted list on the page. For example: ordered - ol unordered - ul ");


//Design page with user prompts
document.body.style.backgroundColor = bg_color;
document.body.style.fontFamily = font_type;
document.querySelector('h1.header_text').style.display = 'flex';
document.querySelector('h1.header_text').style.justifyContent = h1_align;
document.querySelector('div.paragraph_text').style.backgroundColor = link_bg;
document.querySelector('div.paragraph_text').style.color = link_text_color; // color for links under

const style_for_div = div_text_style.split(' ');
document.querySelector('div').style.color = style_for_div['0'];
document.querySelector('div').style.fontSize = style_for_div['1'];
document.querySelector('div').style.fontWeight = style_for_div['2'];

const list_wrap = document.createElement(list_style);
list_wrap.setAttribute('class', 'links_list');
paragraph.appendChild(list_wrap);


//Prompt and add web links for the page
const links = document.querySelector(list_style);

for (let i = 0; i < 3; i++) {
    const url = prompt('Take web address on ' + (i+1) + ' site. For example: https://github.com/ChristabelKindrat ');

    const link_wrap = document.createElement('li');
    const link = document.createElement('a');
    link_wrap.appendChild(link);
    link.href = url;
    link.textContent = url;
    links.appendChild(link_wrap).style.padding = '25px';
    link.style.color = link_text_color;
}
