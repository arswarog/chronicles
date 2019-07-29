var aImg,nIter,nStep;
var isBattle=false;
function Preload(u){
	if (!aImg)
		aImg=new Array();
	var c=aImg.length;
	var f=1;
	for (var i=0; i<c; i++)
		if (aImg[i].src==u){
			f=0;
			break;
		}
	if (f){
		aImg[c]=new Image();
		aImg[c].src=u;
	}
}
function SetDisplay(id,t){
	var e=document.getElementById(id);
	if (e)
		e.style.display=t?((t>1)?"inline-":"")+"block":"none";
}
function SetWidth(id,w){
	var e=document.getElementById(id);
	if (e)
		e.style.width=w;
}
function SetSrc(id,s,d){
	var e=document.getElementById(id);
	if (e)
		e.src=(d?sImgDynDir:sImgDir)+s;
}
function SetText(id,t){
	var e=document.getElementById(id);
	if (e)
		e.innerHTML=t;
}
function BattleReset(){
	var a=new Array("sh1","sh2","sh3","t1r","t2r");
	for (var i=0; i<a.length; i++)
		SetDisplay(a[i],0);
	nIter=0;
	BattleIter();
}
function BattleIter(){
	nStep=0;
	var i1=aDataAction[nIter][0],i2=aDataAction[nIter][1];
	if (i1>=0){
		var s="battle/"+(aDataAction[nIter][2]?aDataUser[i2][3]+"d":aDataUser[i1][3]+"a")+".png";
		SetText("u1",aDataUser[i1][1]);
		SetText("u2",aDataUser[i2][1]);
		SetText("u1p",aDataUser[i1][8]);
		SetText("u2p",aDataUser[i2][8]);
		SetText("actrt",sShot+" <span class='col1'>"+(aDataAction[nIter][2]?aDataUser[i2][1]:aDataUser[i1][1])+"</span>");
		SetSrc("t1","tank/"+((!aDataAction[nIter][2] && (aDataUser[i1][2]=="base"))?"gun":aDataUser[i1][2])+"-r.png",1);
		SetSrc("t2","tank/"+((aDataAction[nIter][2] && (aDataUser[i2][2]=="base"))?"gun":aDataUser[i2][2])+"-t.png",1);
		for (var i=1; i<5; i++){
			SetSrc("t1"+i,"crew/"+(aDataAction[nIter][8+i]?((aDataAction[nIter][8+i]<3)?(aDataUser[i1][3+i]+((aDataAction[nIter][8+i]==1)?"t":"c")):"deadt"):"freet")+".gif",1);
			SetSrc("t2"+i,"crew/"+(aDataAction[nIter][12+i]?((aDataAction[nIter][12+i]<3)?(aDataUser[i2][3+i]+((aDataAction[nIter][12+i]==1)?"t":"c")):"deadt"):"freet")+".gif",1);
		}
		SetWidth("t1h",aDataAction[nIter][5]+"%");
		SetWidth("t2h",aDataAction[nIter][6]+"%");
		SetWidth("t1ha",aDataAction[nIter][7]+"%");
		SetWidth("t2ha",aDataAction[nIter][8]+"%");
		SetSrc("sh1",s,0);
		SetSrc("sh2",s,0);
		SetSrc("sh3",s,0);
	}
}
function BattleAct(){
	if (!isBattle)
		return;
	nStep++;
	if (aDataAction[nIter][0]<0){
		if (nStep==1){
			SetText("actrt",aDataAction[nIter][1]);
			setTimeout("BattleAct();", 2000);
		}else if (++nIter<aDataAction.length){
			BattleIter();
			BattleAct();
		}else
			BattleEnd();
	}else{
		if (nStep==2){
			SetSrc("t"+(1+aDataAction[nIter][2])+"r","battle/fire"+(aDataAction[nIter][2]+1)+".png",0);
			SetDisplay("t"+(1+aDataAction[nIter][2])+"r",2);
			SetDisplay("sh"+(1+aDataAction[nIter][2]*2),2);
		}
		if (nStep==3){
			SetDisplay("t"+(1+aDataAction[nIter][2])+"r",0);
			SetDisplay("sh"+(1+aDataAction[nIter][2]*2),0);
			SetDisplay("sh2",2);
		}
		if (nStep==4){
			SetDisplay("sh2",0);
			SetDisplay("sh"+(3-aDataAction[nIter][2]*2),2);
		}
		if (nStep==5){
			SetDisplay("sh"+(3-aDataAction[nIter][2]*2),0);
			SetSrc("t"+(2-aDataAction[nIter][2])+"r","battle/"+aDataAction[nIter][3]+".png",0);
			SetDisplay("t"+(2-aDataAction[nIter][2])+"r",2);
			SetText("actrt",aDataAction[nIter][4]);
			for (var i=1; i<5; i++){
				SetSrc("t1"+i,"crew/"+(aDataAction[nIter][20+i]?((aDataAction[nIter][20+i]<3)?(aDataUser[aDataAction[nIter][0]][3+i]+((aDataAction[nIter][20+i]==1)?"t":"c")):"deadt"):"freet")+".gif",1);
				SetSrc("t2"+i,"crew/"+(aDataAction[nIter][24+i]?((aDataAction[nIter][24+i]<3)?(aDataUser[aDataAction[nIter][1]][3+i]+((aDataAction[nIter][24+i]==1)?"t":"c")):"deadt"):"freet")+".gif",1);
			}
			SetWidth("t1h",aDataAction[nIter][17]+"%");
			SetWidth("t2h",aDataAction[nIter][18]+"%");
			SetWidth("t1ha",aDataAction[nIter][19]+"%");
			SetWidth("t2ha",aDataAction[nIter][20]+"%");
		}
		if (nStep==6){
			SetDisplay("t"+(2-aDataAction[nIter][2])+"r",0);
			if (++nIter<aDataAction.length){
				BattleIter();
				BattleAct();
			}
			else
				BattleEnd();
		}
		else
			setTimeout("BattleAct();", (nStep==5)?2000:1000);
	}
}
function BattleEnd(){
	if (!isBattle)
		return;
	isBattle=false;
	SetDisplay("act",0);
	SetDisplay("res",1);
}
function BattleInit(){
	var isOperaMini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";
	if (isOperaMini)
		return;
	if (!aImg){
		for (var i=0; i<aDataAction.length; i++){
			var i1=aDataAction[i][0],i2=aDataAction[i][1];
			if (i1>=0){
				Preload(sImgDynDir+"tank/"+((!aDataAction[i][2] && (aDataUser[i1][2]=="base"))?"gun":aDataUser[i1][2])+"-r.png");
				Preload(sImgDynDir+"tank/"+((aDataAction[i][2] && (aDataUser[i2][2]=="base"))?"gun":aDataUser[i2][2])+"-t.png");
				for (var j=1; j<5; j++){
					Preload(sImgDynDir+"crew/"+(aDataAction[i][6+j]?((aDataAction[i][6+j]<3)?(aDataUser[i1][3+j]+((aDataAction[i][6+j]==1)?"t":"c")):"deadt"):"freet")+".gif");
					Preload(sImgDynDir+"crew/"+(aDataAction[i][10+j]?((aDataAction[i][10+j]<3)?(aDataUser[i2][3+j]+((aDataAction[i][10+j]==1)?"t":"c")):"deadt"):"freet")+".gif");
					Preload(sImgDynDir+"crew/"+(aDataAction[i][16+j]?((aDataAction[i][16+j]<3)?(aDataUser[i1][3+j]+((aDataAction[i][16+j]==1)?"t":"c")):"deadt"):"freet")+".gif");
					Preload(sImgDynDir+"crew/"+(aDataAction[i][20+j]?((aDataAction[i][20+j]<3)?(aDataUser[i2][3+j]+((aDataAction[i][20+j]==1)?"t":"c")):"deadt"):"freet")+".gif");
				}
				Preload(sImgDir+"battle/"+(aDataAction[i][2]?aDataUser[i2][3]+"d":aDataUser[i1][3]+"a")+".png");
				Preload(sImgDir+"battle/fire"+(aDataAction[i][2]+1)+".png");
				Preload(sImgDir+"battle/"+aDataAction[i][3]+".png");
			}
		}
	}
	BattleReset();
	SetDisplay("res",0);
	SetDisplay("act",1);
	isBattle=true;
}
