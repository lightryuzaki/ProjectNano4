/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* 2001003 - Straw Hat Snowman
    @author Ronan


var status = -1;

function start() { 
    action(1, 0, 0);
} 
function action(mode, type, selection) { 
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            cm.sendYesNo("We have a beautiful christmas tree.\r\nDo you want to see/decorate it?");
        } else if(status == 1) {
            cm.warp(209000003);
            cm.dispose();
        }
    }
} 
*/

var item;
var common = Array(1000091, 1050392, 1002885, 1051179, 1004439, 1102801, 1052895, 1702696, 1004841, 1050371, 1082495, 1003730, 1052554, 1051440, 1004835, 1102957);
var normal = Array(1053092, 1073168, 1002998, 1002999, 1052211, 1004659, 1052225); 
var rare = Array(1004794,1004661, 1004660,1004589, 1004472, 1912017, 1052634);
var rare1 = Array(1004680, 1004756,1004725, 1004738, 1042283, 1072873, 1052677, 1082558, 1052672, 1082592);
var rare2 = Array(1102835,1052923, 1004503, 1082550, 1003761);
var rare3 = Array(1102641,1052910, 105911, 1004471, 1112141, 1112252);
var rare4 = Array(1115108, 1115110, 1115113, 1115114, 1115115, 1115116, 1112284, 1112177,1112289);
var rare5 = Array(1003359, 1003360, 5000110, 1902024, 1912041, 1902048);

function getRandom(min, max) {
	if (min > max) {
		return(-1);
	}

	if (min == max) {
		return(min);
	}

	return(min + parseInt(Math.random() * (max - min + 1)));
}

var icommon = common[getRandom(0, common.length - 1)];
var inormal = normal[getRandom(0, normal.length - 1)];
var irare = rare[getRandom(0, rare.length - 1)];
var irare1 = rare1[getRandom(0, rare1.length - 1)];
var irare2 = rare2[getRandom(0, rare2.length - 1)];
var irare3 = rare3[getRandom(0, rare3.length - 1)];
var irare4 = rare4[getRandom(0, rare4.length - 1)];
var irare5 = rare5[getRandom(0, rare5.length - 1)];

var chance = getRandom(0, 7);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("#rOkay, come back when you're ready to test your #eRNG!");
			cm.dispose();
			return;
		} else if (mode == 1) {
			status++;
		}

		if (status == 0) {
			cm.sendNext(" #i3991013##i3991023##i3991006##i3991000##i3991002##i3991007##i3991000##i3991015##i3991014##i3991013# \r\nHello #h #,\r\n\r\nWant to try your luck at the #r#eNX Gachapon?#n#k You can earn assorted up to date NX items as well as mastery books, boss summoning bags, and boss coins! Remember that it will cost you #r#e10,000,000 mesos#n#k a spin! #b#eGood Luck!");
		} else if (status == 1) {
			if (cm.getMeso() >= 10000000) {
				//cm.gainMeso([-1]);
				cm.sendNext(" #eFeatured NX Items in July#e \r\n\r\n #i1003359##i1003360#  #i1912017# #i1902024#\r\n ------------------------------------------------------------------------------ \r\n#i1102641##i5000110##i1102957##i1102789##i1082558#\r\n ------------------------------------------------------------------------------ \r\n #i1004503##i1004472##i1050371##i1052677##i1004471##i1912041# \r\n ------------------------------------------------------------------------------ \r\n \t\t\t\t\t\#e#rGood Luck Adventurer!");
				
			} else {
                cm.sendOk("Sorry you dont have 10,000,000 mesos :(");
                cm.dispose();				
				}
		} else if (status == 2) {
        //    		 cm.setDailyReward('DailyGift');
					 
            var randomTemporaryEquipItemId = 1002553;
            if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(0)){
            if (cm.canHold(randomTemporaryEquipItemId)) {
                if (chance === 0) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(icommon, 1) + "##k #v" + icommon + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 1) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(inormal, 1) + "##k #v" + inormal + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 2) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare, 1) + "##k #v" + irare + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 3) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare1, 1) + "##k #v" + irare1 + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 4) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare2, 1) + "##k #v" + irare2 + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 5) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare3, 1) + "##k #v" + irare3 + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 6) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare4, 1) + "##k #v" + irare4 + "#");
                    cm.gainMeso([-10000000]);
                } else if (chance === 7) {
                    cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare5, 1) + "##k #v" + irare5 + "#");
                    cm.gainMeso([-10000000]);
                }
            }
            } else {
                cm.sendOk("You don't have enough space in your equipment tab.");
            }
			cm.dispose();
		}
	}
}