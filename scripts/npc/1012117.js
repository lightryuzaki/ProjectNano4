/*
Made by iPreSkooler
*/
var status = 0;
var beauty = 0;

var mface = new Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057);
var mface2 = new Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20055, 20056, 20057);


var fface = new Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055);
var fface2 = new Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055);

var mhair = Array(30000, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30380, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 32160, 33030, 33060, 33070, 33080, 33090, 33100, 33120, 33130, 33150, 33170, 33180, 33190, 33240, 33250, 33260, 33270, 33280, 33290, 33310, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33440);
var mhair2 = Array(33400,33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33620, 33630, 33640, 33660, 33670, 33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33780, 33790, 33800, 33810, 33820, 33830, 33930, 33940, 33950, 33960, 33990, 36000, 36010, 36040, 36050, 36100, 36140, 36160, 36170, 36180, 36190, 36210, 36220, 36230, 36260, 36270, 36330, 36390, 36300, 36310, 36600, 36610, 36680, 36700, 36770, 36780, 36810, 36830, 36950, 37170);
var mhair3 = Array(35040, 35050, 35130, 35190, 35260, 35280, 36900, 36690, 36510);

var fhair = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31360, 31380, 31400, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990, 34000, 34010, 34020, 34030, 34050, 34110, 32560, 34040, 34100, 34110, 34120, 34130, 34150, 34180, 34210, 34220, 34230, 34250, 34260, 34240, 34270, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34430, 34440, 34470, 34480);
var fhair2 = new Array(32650,32660,34510, 34540, 34560, 34590, 34610, 34620, 34630, 34640, 34650, 34670, 34680, 34690, 34700, 34710, 34720, 34750, 34760, 34780, 34790, 34800, 34830, 34840, 34850, 34860, 34870, 34880, 34890, 34900, 34910, 34970, 36990, 37000, 37010,37020, 37030, 37040, 37050, 37060, 37070, 37080, 37090, 37200, 37210, 37220, 37230, 37240, 37250, 37260,  37310, 37320, 37340, 37370, 37380, 37420, 37470, 37510, 37520, 37560, 37580, 37610, 37630, 37640, 37650, 37670, 37680, 37710, 37720, 37730, 37740, 37750, 37760, 37770, 37780, 37790, 37800, 37810, 37820, 37830, 37860, 37880, 37900, 37910, 37940, 37950, 37960, 37980, 37990, 38000, 38010, 38020, 38040, 38050, 38060, 38070, 38080, 38090, 38100, 38110, 38120, 38150, 38160, 38180, 38240, 38260, 38270, 38300, 38320, 38330, 38350, 38390, 38400, 38410, 38420, 38430);
var fhair3 = new Array(38450, 38460, 38470, 38480, 38490, 38570, 38590,38560, 38520, 38560, 38580, 38620, 38630, 38640, 38660, 38670, 38690, 38700, 38710,38770);

var skin = Array(0, 1, 2, 3, 4, 5, 10, 11, 12);
var hairnew = Array();
var facenew = Array();
var colors = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) 
            cm.sendSimple("\r\n#e#L0##i5150001##rHaircut#k#i5150001##l\t\t\t\#L3##i5152001##bFace Surgery#k#i5152001##l\r\n#L1##i5150001##rHaircut#k#i5150001##l\t\t\t\#L4##i5152001##bFace Surgery#k#i5152001##l\r\n#L2##i5150001##rHaircut#k#i5150001##l\r\n\r\n");
        else if (status == 1) {
			if (selection == 0) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair.length; i++)
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair.length; i++)
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("#eWant a new Hairstyle? If you have a #b#t5150001##k I'll change it for you!", hairnew);
            } else if (selection == 1) {
				beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair2.length; i++)
                        hairnew.push(mhair2[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair2.length; i++)
                        hairnew.push(fhair2[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("#eWant a new Hairstyle? If you have a #b#t5150001##k I'll change it for you!", hairnew);
			} else if (selection == 2) {
				beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair3.length; i++)
                        hairnew.push(mhair3[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair3.length; i++)
                        hairnew.push(fhair3[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("#eWant a new Hairstyle? If you have a #b#t5150001##k I'll change it for you!", hairnew);
			} else if (selection == 3) {
				beauty = 2;
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++)
                        facenew.push(mface[i] + parseInt(cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100)));
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++)
                        facenew.push(fface[i] + parseInt(cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100)));
                }	
                cm.sendStyle("#eWant Plastic Surgery? If you have a #b#t5152001##k I'll change it for you!", facenew);
			} else if (selection == 4) {
				beauty = 2;
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface2.length; i++)
                        facenew.push(mface2[i] + parseInt(cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100)));
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface2.length; i++)
                        facenew.push(fface2[i] + parseInt(cm.getPlayer().getFace()% 1000 - (cm.getPlayer().getFace()% 100)));
                }	
                cm.sendStyle("#eWant Plastic Surgery? If you have a #b#t5152001##k I'll change it for you!", facenew);
             } else if (selection == 5) {
                beauty = 3;
                if (cm.getPlayer().getGender() == 0)
                    var current = cm.getPlayer().getFace()% 100 + 23000;
                if (cm.getPlayer().getGender() == 1)
                    var current = cm.getPlayer().getFace() % 100 + 24000;
                colors = Array();
                colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
                cm.sendStyle("#eWant a new Eye Color? If you have a #b#t5152013##k I'll change it for you!", colors);
			} else if (selection == 6) {
                beauty = 4;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()/10)*10;
                for(var i = 0; i < 8; i++)
                    haircolor.push(current + i);
                cm.sendStyle("#eWant a new Hair Color? If you have a #b#t5151001##k I'll change it for you!", haircolor);
			} else if (selection == 7) {
				beauty = 5;
				cm.sendStyle("#eWant a new Skin Color? If you have a #b#t5153000##k I'll change it for you!", skin);
			}
		} else if (status == 2){
            cm.dispose();
            if (beauty == 1){
                if (cm.haveItem(5150001)){
                    cm.gainItem(5150001, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("#eEnjoy your new and improved Haircut!");
                } else
                    cm.sendOk("#e#rYou'll need a #b#t5150001##k");
            }	
			 if (beauty == 2){
                if (cm.haveItem(5152001)){
                    cm.gainItem(5152001, -1);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("#eEnjoy your new and improved Plastic Surgery!");
                } else
                    cm.sendOk("#e#rYou'll need a #b#t5152001##k");
            }
			  if (beauty == 3){
                if (cm.haveItem(5152013)){
                    cm.gainItem(5152013, -1);
                    cm.setFace(colors[selection]);
                    cm.sendOk("#eEnjoy your new and improved Eye Color!");
                } else
                    cm.sendOk("#e#rYou'll need a #b#t5152013##k");
            }
            if (beauty == 4){
                if (cm.haveItem(5151001)){
                    cm.gainItem(5151001, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("#eEnjoy your new and improved Hair Color!");
                } else
                    cm.sendOk("#e#rYou'll need a #b#t5151001##k");
            }
			if (beauty == 5){
                if (cm.haveItem(5153000)){
                    cm.gainItem(5153000, -1);
                    cm.setSkin(skin[selection]);
                    cm.sendOk("#eEnjoy your new and improved Skin Color!");
                } else
                    cm.sendOk("#e#rYou'll need a #b#t5153000##k");
            }
        }
    }
}