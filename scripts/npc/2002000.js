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

/**
Rupi- Happyville Warp NPC
**/
/*
function start() {
    cm.sendYesNo("Do you want to get out of Happyville?");
}

function action(mode, type, selection) {
    if (mode < 1)
        cm.dispose();
    else {
        var map = cm.getPlayer().getSavedLocation("HAPPYVILLE");
        if (map == -1)
                map = 101000000;
        
        cm.warp(map, 0);
    }
    
    cm.dispose();
}
*/

var item;
var common = Array(1702640,1702727,1702733,1702740,1702687,1702688,1702690,1702694,1702625,1702629,1702654,1702534,1702712,1702713,1702714);
var normal = Array(1702715, 1702716, 1702722, 1702538, 1702533, 1702530, 1702529, 1702528, 1702521, 1702468, 1702211, 1702136, 1702419); 
var rare = Array(1702455, 1702457, 1702462, 1702486, 1702711, 1702372, 1702379);
var rare1 = Array(1702364,1702363,1702433,1702712, 1702713, 1702714);
var rare2 = Array(1702453,1702423);

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

var chance = getRandom(0, 9);

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
            cm.sendNext(" #i3991013##i3991023##i3991006##i3991000##i3991002##i3991007##i3991000##i3991015##i3991014##i3991013# \r\nHello #h #,\r\n\r\nWant to try your luck at the #r#eNX Weapon Gachapon?#n#k You can earn assorted up to date NX Weapons Remember that it will cost you #r#e10,000,000 mesos#n#k a spin! #b#eGood Luck!");
        } else if (status == 1) {
            if (cm.getMeso() >= 10000000) {
                //cm.gainMeso([-1]);
                cm.sendNext(" #eFeatured NX Items in July#e \r\n\r\n #i1702453# #i1702714#  #i1702713# #i1702211# #i1702419# #i1702364# #i1702372#\r\n ------------------------------------------------------------------------------ \r\n#i1702694# #i1702654# #i1702715# #i1702521# #i1702629# #i1702625# #i1702688# \r\n ------------------------------------------------------------------------------ \r\n #i1702716# #i1702538# #i1702534# #i1702722# #i1702711# #i1702433# #i1702423# \r\n ------------------------------------------------------------------------------ \r\n \t\t\t\t\t\#e#rGood Luck Adventurer!");
                
            } else {
                cm.sendOk("Sorry you dont have 10,000,000 mesos :(");
                cm.dispose();               
                }
        } else if (status == 2) {
        //           cm.setDailyReward('DailyGift');
                     
            if(!cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).isFull(0)){
            if (chance > 0 && chance <= 1) {
            cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(icommon, 1) + "##k #v" + icommon + "#"); 
            cm.gainMeso([-10000000]);
            } else if (chance >= 2 && chance <= 3) {
            cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(inormal, 1) + "##k #v" + inormal + "#");
            cm.gainMeso([-10000000]);
            } else if (chance >=4 && chance <=5) {
            cm.sendOk("#b#eCongratulations!#n#k You have obtained a #d#t" + cm.gainItem(irare, 1) + "##k #v" + irare + "#");
            cm.gainMeso([-10000000]);
            } else if (chance >= 6 && chance <= 7) {
            cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare1, 1) + "##k #v" + irare1 + "#");
            cm.gainMeso([-10000000]);
            } else if (chance >= 8 && chance <= 9) {
            cm.sendOk("#b#eCongratulations!#n#k You have obtained a #b#t" + cm.gainItem(irare2, 1) + "##k #v" + irare2 + "#");
            cm.gainMeso([-10000000]);
            }
        }
            else{
                 cm.sendOk("Please make sure you have enough space to hold these items!");
            }
            cm.dispose();
        }
    }
}