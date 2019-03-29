/* Author: aaroncsn (MapleSea Like)
	NPC Name: 		Shati
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Assistant Hairdresser


var status = 0;
var beauty = 0;
var mhair = Array(30250, 30350, 30270, 30150, 30300, 30600, 30160, 30700, 30720, 30420);
var fhair = Array(31040, 31250, 31310, 31220, 31300, 31680, 31160, 31030, 31230, 31690, 31210, 31170, 31450);
var hairnew = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status >= 0) {
			cm.sendNext("I guess you aren't ready to make the change yet. Let me know when you are!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("Hey there! I'm Shatti, and I'm Mazra's apprentice. If you have #bAriant hair style coupon(REG)#k or #bAriant hair color coupon(REG)#k with you, how about allowing me to work on your hair? \r\n#L0##bChange Hairstyle (Reg Coupon) \r\n#L1##bDye Hair(Reg. coupon)");
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
 % 10));
					}
				}
				cm.sendYesNo("If you use the Reg. coupon, your hairstyle will be changed to a random new look. You'll also have access to new hairstyles I worked on that's not available for VIP coupons. Would you like to use #bAriant hair style coupon(REG)#k for a fabulous new look?");
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("If you use the regular coupon, your hair color will change to a random new color. Are you sure you want to use #b#t5151021##k and randomly change your hair color?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150026) == true){
					cm.gainItem(5150026, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("Enjoy your new and improved hairstyle!");
				} else {
					cm.sendNext("I can only change your hairstyle if you bring me the coupon. You didn't forget that, did you?");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151021) == true){
					cm.gainItem(5151021, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("Enjoy your new and improved haircolor!");
				} else {
					cm.sendNext("I can only change your hairstyle if you bring me the coupon. You didn't forget that, did you?");
				}
			}
		}
	}
}
*/
var status = 0; 
var beauty = 0; 
var haircolor = Array(); 
var skin = [0, 1, 2, 3, 4, 5, 9, 10]; 
var fhair= [31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31360, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 31990, 34000, 34010, 34020, 34030, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34210, 34220, 34240, 34250, 34260, 34270, 34310, 34320, 34330, 34340, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34590, 34600, 34610, 34620, 34630, 34650, 34660, 34670, 34680, 34690, 34720, 34780, 34790]; 
var hair = [30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30690, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 30990, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33150, 33160, 33170, 33180, 33190, 33210, 33220, 33240, 33250, 33260, 33270, 33280, 33290, 33330, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33660, 33670, 33680, 33690, 33800]; 
var rhair = [];
//var rhair = [30100, 30830, 30740, 30870, 30880, 33100, 33040, 33000, 30990, 30950, 30940, 30930, 30920, 30910, 30900, 30890]; 
//var rfhair = [31870, 31860, 31880, 31890, 31910, 31920, 31930, 31950, 34110, 34000, 34010, 34020, 34030, 31400, 31420, 31820, 31830, 31840, 31850, 34050]; 
var rfhair =[];
var hairnew = Array(); 
var face = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20036, 20037, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20052, 20053, 20055, 20056, 20057]; 
var fface = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21052, 21053, 21054, 21055, 21058, 21062]; 
var facenew = Array(); 
var colors = Array();

function start() { 
    cm.sendSimple("Hey #h #! I am #eShati, #n , the best Female hair stylist in all of ProjectNano! Which of the category would you like to change?\r\n#L0#Skin#l\r\n\r\n#L5##rFemale#k Hair#l\r\n#L6##rFemale#k Eye#l\r\n\r\n#L2#Hair Colour#l                       \r\n#L4#Eye Colour#l\r\n"); 
} 

function action(mode, type, selection) { 
    status++; 
    if (mode != 1){ 
        cm.dispose(); 
        return; 
    } 
    if (status == 1) { 
        beauty = selection + 1; 
        var playerHair = cm.getPlayer().getHair() % 10; 
        var playerFace = cm.getPlayer().getFace() % 1000; 
        playerFace = playerFace - (playerFace % 100); 
        if (selection == 0) 
            cm.sendStyle("Pick one?", skin); 
        else if (selection == 1 && cm.getPlayer().getGender() == 0|| selection == 5 && cm.getChar().getGender() == 1) { 
            for each(var i in selection == 1 ? hair : fhair) { 
                if(i == 30010 || i== 30070 || i== 30080 || i== 30090) 
                  hairnew.push(i); 
                else 
                  hairnew.push(i + playerHair); 
   
} 
            cm.sendStyle("Pick one?", hairnew); 
        } else if (selection == 7) { 
            for (var i = 0; i < rhair.length; i++) { 
                hairnew.push(rhair[i] + playerHair); 
            } 
            cm.sendStyle("Pick one?", hairnew); 
        } else if (selection == 8) { 
            for (var i = 0; i < rfhair.length; i++) { 
                hairnew.push(rfhair[i] + playerHair); 
            } 
            cm.sendStyle("Pick one?", hairnew); 
        } else if (selection == 2) { 
            for(var k = 0; k < 8; k++) 
                haircolor.push((cm.getPlayer().getHair() - playerHair) + k); 
            cm.sendStyle("Pick one?", haircolor); 
        } else if (selection == 3 && cm.getPlayer().getGender() == 0|| selection == 6 && cm.getPlayer().getGender() == 1) { 
            for each(var j in selection == 3 ? face : fface) { 
                if (!((j == 21030 || j == 21029 ||  j == 21027 || j == 21020 || j == 21017 || j == 21016 ||  j == 20032 || j == 20031 || j == 20029 || j == 20027 || j == 20025 || j == 20017 || j == 20016) && playerFace == 800)) 
                  facenew.push(j + playerFace); 
                else 
                  facenew.push(j); 
            } 
            cm.sendStyle("Pick one?", facenew); 
        } else if (selection == 4) { 
            var eye = cm.getPlayer().getFace() - playerFace 
            if (eye == 21030 || eye == 21029 ||  eye == 21027 || eye == 21020 || eye == 21017 || eye == 21016 ||  eye == 20032 || eye == 20031 || eye == 20029 || eye == 20027 || eye == 20025 || eye == 20017 || eye == 20016) 
                count = 8; 
            else 
                count = 9; 
            for(var i = 0; i < count; i++) 
                colors.push(eye + (i*100)); 
            cm.sendStyle("Pick one?", colors); 
         
} else { 
cm.playerMessage(1, "\r\nROFLMAO!\r\n\r\n Are you blind?\r\n\r\n You selected the wrong gender!"); 
cm.sendOk("#eROFLMAO!!!!!!!!!!!!!!!!!!!#k\r\n\r\nAre you trying to be weird? \r\nYou selected the wrong gender?\r\nGo and get a Gender Change if you want your opposite gender style!"); 
cm.dispose(); 
} 
    } else if (status == 2){ 
        if (beauty == 1) 
            cm.setSkin(skin[selection]); 
        if (beauty == 2 || beauty == 6 || beauty == 8 || beauty == 9) 
            cm.setHair(hairnew[selection]); 
        if (beauty == 3) 
            cm.setHair(haircolor[selection]); 
        if (beauty == 4 || beauty == 7) 
            cm.setFace(facenew[selection]); 
        if (beauty == 5) 
            cm.setFace(colors[selection]); 
        cm.sendOk("Hope you like it. :)"); 
    cm.dispose(); 
    } 
}  