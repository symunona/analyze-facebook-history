/* This way we can access it from the browser too */

// var exp = window || exports;
if (typeof window == 'undefined') exp = exports;
else exp = window;


exp.c = {};

exp.c.emotions = {
    happy: ":)  :D  : )  : D  :-)  :-D  XD  lol  lool  loool  \\o/  :*  :o)  :]  :3  :c)  :>  =]  8)  =)  :}  :^)  :っ)  :‑D  8‑D  8D  x‑D  xD  X‑D  XD  =‑D  =D  =‑3  =3  B^D  :-))  :'‑)  :')  ;‑)  ;)  *-)  *)  ;‑]  ;]  ;D  ;^)  :‑,".toLocaleLowerCase().split("  "),
    sad: ":(  :<  : (  : /  :-/  :-\\  :\\  :'(  >:[  :‑(  :(  :‑c  :c  :‑<  :っC  :<  :‑[  :[  :{".toLocaleLowerCase().split("  "),
    sceptical: ">:\\ >:/ :‑/ :‑. :/ :\\ =/ =\\ :L =L :S >.<".toLocaleLowerCase().split(" "),
    angry: ":-|| :@ >:(".toLocaleLowerCase().split(" "),
    horror: "D:< D: D8 D; D= DX v.v D‑':".toLocaleLowerCase().split(" "),
    suprised: ">:O :‑O :O :‑o :o 8‑0 O_O o‑o O_o o_O o_o O-O".toLocaleLowerCase().split(" "),
    playful: ">:P :‑P :P X‑P x‑p xp XP :‑p :p =p :‑Þ :Þ :þ :‑þ :‑b :b d:".toLocaleLowerCase().split(" "),
    evil: ">:) >;) >:‑)".toLocaleLowerCase().split(" "),
    devilish: "}:‑) }:) 3:‑) 3:)".toLocaleLowerCase().split(" ")
};


var emotioncolumns = [];
for (var key in exp.c.emotions) {
    emotioncolumns.push(key + ' INT');
}

exp.c.extendStatColumns = emotioncolumns;