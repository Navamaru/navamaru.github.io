var _0x88ba=['#submitbutton','display','Hai\x20risposto\x20correttamente\x20a\x20','\x20domande\x20su\x20','center','2em','\x20punti','insertAfter','splashdiv','#frame','textlogosplash','#splashdiv','imageLogo','http://www.lineadiretta24.it/wp-content/uploads/2017/04/robot-anni-70-e-80-860x450_c.jpg','descQuiz','button','Inizia','buttonStart','points','sort','leaderboard','Leader\x20Board','leadbTitle','#leaderboard','descRow','leadRow','firstCelldesc','#descRow','Punteggio','#secondCelldesc','thirdCelldesc','#thirdCelldesc','oddRows','firstCell','#leadRow','name','#firstCell','secondCell','#secondCell','thirdCell','continua','Ricomincia','reload','#continua','setRequestHeader','Content-Type','stringify','greetings','Complimenti!\x20Sei\x20entrato\x20nella\x20Leaderboard!','Inserisci\x20il\x20tuo\x20nome!','Giocatore\x20Anonimo','push','includes','quizContainer','string','#quizContainer','Quiz','array','pager','Domanda\x201\x20di\x20','#infoBar','bar','&nbsp;','choice-block','choice-box','submitbutton','Conferma','#222','offsetWidth','parse','QuizToon!','Metti\x20alla\x20prova\x20le\x20tue\x20conoscenze!','ready','overrideMimeType','application/json','open','GET','onreadystatechange','status','200','responseText','send','domande.json','readyState','undefined','type','#choice-block','empty','createElement','choice\x20choice-box','attr','data-index','text','appendTo','width','find','div','animate','html','floor','#explanation','question','#pager','length','hasOwnProperty','image','img','addClass','question-image','src','#question-image','remove','#progressBar','choices','correct','.choice','click','style','off','mouseout\x20mouseover','css','#2274e5','white','getElementById','progressBar','secBar','0123456789ABCDEF','random','backgroundColor','round','#question'];(function(_0x265a56,_0x2d9e4c){var _0x41e547=function(_0x5b714f){while(--_0x5b714f){_0x265a56['push'](_0x265a56['shift']());}};_0x41e547(++_0x2d9e4c);}(_0x88ba,0x1cf));var _0x205e=function(_0x3861e3,_0x2b8628){_0x3861e3=_0x3861e3-0x0;var _0x3d6507=_0x88ba[_0x3861e3];return _0x3d6507;};var quiztitle=_0x205e('0x0');var quizdesc=_0x205e('0x1');var quiz=[];var questionsSelected=[];var numberOfQuestionsPerQuiz=0x4;var progressIndicator=0x64;var totalScore=0x0;var secondsToAnswer=0xa;var barWidth;var theTimer;var chain=0x1;var previousCorrect=![];var possScore=0x0;var perfectScore=0xf4240;var scoreboard;var scoreboardmaxlength=0xa;var timePassed=0x0;var myVar;var scoreurl='https://api.myjson.com/bins/1c00gj';jQuery(document)[_0x205e('0x2')](function(_0x588b46){var _0x2ec15e=0x0,_0x476064=0x0,_0x2e6422=!![],_0xbbfdad;function _0x1d8819(_0x4f531d){var _0x210f15=new XMLHttpRequest();_0x210f15[_0x205e('0x3')](_0x205e('0x4'));_0x210f15[_0x205e('0x5')](_0x205e('0x6'),scoreurl,!![]);_0x210f15[_0x205e('0x7')]=function(){if(_0x210f15['readyState']==0x4&&_0x210f15[_0x205e('0x8')]==_0x205e('0x9')){_0x4f531d(_0x210f15[_0x205e('0xa')]);}};_0x210f15[_0x205e('0xb')](null);}function _0x32826f(_0x5266ed){var _0xc733cc=new XMLHttpRequest();_0xc733cc[_0x205e('0x3')]('application/json');_0xc733cc[_0x205e('0x5')](_0x205e('0x6'),_0x205e('0xc'),!![]);_0xc733cc[_0x205e('0x7')]=function(){if(_0xc733cc[_0x205e('0xd')]==0x4&&_0xc733cc[_0x205e('0x8')]==_0x205e('0x9')){_0x5266ed(_0xc733cc['responseText']);}};_0xc733cc[_0x205e('0xb')](null);}function _0x467194(_0x101dd0){if(typeof _0x101dd0!==_0x205e('0xe')&&_0x588b46[_0x205e('0xf')](_0x101dd0)=='array'){_0x588b46(_0x205e('0x10'))[_0x205e('0x11')]();for(var _0x1f3903=0x0;_0x1f3903<_0x101dd0['length'];_0x1f3903++){_0x588b46(document[_0x205e('0x12')]('li'))['addClass'](_0x205e('0x13'))[_0x205e('0x14')](_0x205e('0x15'),_0x1f3903)[_0x205e('0x16')](_0x101dd0[_0x1f3903])[_0x205e('0x17')](_0x205e('0x10'));}}}function _0x52d5ea(_0x25aad1,_0x43343f,_0x409fa1,_0x16f9e3){if(_0x16f9e3==!![]){clearTimeout(theTimer);}var _0x1fdd37=_0x25aad1*_0x409fa1[_0x205e('0x18')]()/_0x43343f;possScore=_0x43343f-_0x25aad1;_0x409fa1[_0x205e('0x19')](_0x205e('0x1a'))[_0x205e('0x1b')]({'width':_0x1fdd37},0x1f4)[_0x205e('0x1c')](Math[_0x205e('0x1d')](_0x25aad1/0x3c)+':'+_0x25aad1%0x3c);if(_0x25aad1>0x0){theTimer=setTimeout(function(){_0x52d5ea(_0x25aad1-0x1,_0x43343f,_0x409fa1,![]);},0x3e8);}};function _0x58b279(){_0x2e6422=!![];possScore=0x0;_0x588b46(_0x205e('0x1e'))['empty']();_0x588b46('#question')[_0x205e('0x16')](quiz[_0x2ec15e][_0x205e('0x1f')]);_0x588b46(_0x205e('0x20'))['text']('Domanda\x20'+Number(_0x2ec15e+0x1)+'\x20di\x20'+quiz[_0x205e('0x21')]);if(quiz[_0x2ec15e][_0x205e('0x22')](_0x205e('0x23'))&&quiz[_0x2ec15e][_0x205e('0x23')]!=''){if(_0x588b46('#question-image')[_0x205e('0x21')]==0x0){_0x588b46(document[_0x205e('0x12')](_0x205e('0x24')))[_0x205e('0x25')](_0x205e('0x26'))[_0x205e('0x14')]('id',_0x205e('0x26'))['attr'](_0x205e('0x27'),quiz[_0x2ec15e][_0x205e('0x23')])['insertAfter']('#question');}else{_0x588b46(_0x205e('0x28'))[_0x205e('0x14')](_0x205e('0x27'),quiz[_0x2ec15e][_0x205e('0x23')]);}}else{_0x588b46(_0x205e('0x28'))[_0x205e('0x29')]();}_0x52d5ea(secondsToAnswer,secondsToAnswer,_0x588b46(_0x205e('0x2a')),!![]);_0x467194(quiz[_0x2ec15e]['choices']);_0x4e3acf();}function _0x3e88cb(_0x38c53c){if(quiz[_0x2ec15e][_0x205e('0x2b')][_0x38c53c]==quiz[_0x2ec15e][_0x205e('0x2c')]){if(previousCorrect){chain++;}_0x476064++;_0x2ec15e++;previousCorrect=!![];if(_0x2ec15e==quiz[_0x205e('0x21')]){_0x403b1a(!![]);}else{_0x403b1a(![]);}}else{chain=0x1;_0x2ec15e++;previousCorrect=![];}if(_0x2ec15e==quiz['length']){if(_0x588b46(_0x205e('0x28'))[_0x205e('0x21')]!=0x0){_0x588b46(_0x205e('0x28'))[_0x205e('0x29')]();}_0x3175a4();}else{_0x58b279();}}function _0x4e3acf(){_0x588b46(_0x205e('0x2d'))['on'](_0x205e('0x2e'),function(){_0xbbfdad=_0x588b46(this)[_0x205e('0x14')]('data-index');_0x588b46(_0x205e('0x2d'))['removeAttr'](_0x205e('0x2f'))[_0x205e('0x30')](_0x205e('0x31'));_0x588b46(this)[_0x205e('0x32')]({'border-color':'#222','font-weight':0x2bc,'background-color':_0x205e('0x33'),'color':_0x205e('0x34')});if(_0x2e6422){_0x2e6422=![];_0x588b46('#submitbutton')[_0x205e('0x32')]({'color':'#000'})['on'](_0x205e('0x2e'),function(){_0x588b46(_0x205e('0x2d'))[_0x205e('0x30')](_0x205e('0x2e'));_0x588b46(this)[_0x205e('0x30')](_0x205e('0x2e'));_0x3e88cb(_0xbbfdad);});}});}function _0x25a02f(){var _0x37846a=document[_0x205e('0x35')](_0x205e('0x36'));var _0x381a9b=document['getElementById'](_0x205e('0x37'));var _0x56926f=_0x205e('0x38');var _0x4300ea='#';for(var _0x5d1d22=0x0;_0x5d1d22<0x6;_0x5d1d22++){_0x4300ea+=_0x56926f[Math[_0x205e('0x1d')](Math[_0x205e('0x39')]()*0x10)];}var _0x2731ff='#';for(var _0x5d1d22=0x0;_0x5d1d22<0x6;_0x5d1d22++){_0x2731ff+=_0x56926f[Math[_0x205e('0x1d')](Math[_0x205e('0x39')]()*0x10)];}_0x37846a[_0x205e('0x2f')]['backgroundColor']=_0x4300ea;_0x381a9b[_0x205e('0x2f')][_0x205e('0x3a')]=_0x2731ff;}function _0x3175a4(){clearInterval(myVar);totalScore=Math[_0x205e('0x3b')](totalScore);_0x588b46('#explanation')['empty']();_0x588b46(_0x205e('0x3c'))[_0x205e('0x11')]();_0x588b46(_0x205e('0x10'))[_0x205e('0x11')]();_0x588b46(_0x205e('0x3d'))[_0x205e('0x29')]();document['getElementById'](_0x205e('0x36'))['style'][_0x205e('0x3e')]='none';document[_0x205e('0x35')](_0x205e('0x37'))[_0x205e('0x2f')]['display']='none';_0x588b46(_0x205e('0x3c'))[_0x205e('0x16')](_0x205e('0x3f')+_0x476064+_0x205e('0x40')+quiz[_0x205e('0x21')]+'.');_0x588b46(document[_0x205e('0x12')]('h2'))[_0x205e('0x32')]({'text-align':_0x205e('0x41'),'font-size':_0x205e('0x42')})[_0x205e('0x16')]('Hai\x20totalizzato\x20'+totalScore+_0x205e('0x43'))[_0x205e('0x44')](_0x205e('0x3c'));_0x14b7cc();}function _0x403b1a(_0x197991){var _0x507782=theTimer/_0x2ec15e;var _0x10ea4e=0x2710/(_0x507782-possScore);totalScore+=_0x10ea4e;if(_0x197991){totalScore=Math[_0x205e('0x3b')](totalScore+perfectScore/theTimer*_0x476064);}}function _0x1e51b3(){_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x45'))['appendTo'](_0x205e('0x46'));_0x588b46(document[_0x205e('0x12')]('h1'))[_0x205e('0x16')](quiztitle)[_0x205e('0x14')]('id',_0x205e('0x47'))[_0x205e('0x17')](_0x205e('0x48'));_0x588b46(document[_0x205e('0x12')]('img'))[_0x205e('0x14')]('id',_0x205e('0x49'))['attr'](_0x205e('0x27'),_0x205e('0x4a'))[_0x205e('0x17')](_0x205e('0x48'));_0x588b46(document[_0x205e('0x12')]('h3'))[_0x205e('0x16')](quizdesc)[_0x205e('0x14')]('id',_0x205e('0x4b'))[_0x205e('0x17')](_0x205e('0x48'));_0x588b46(document[_0x205e('0x12')](_0x205e('0x4c')))[_0x205e('0x16')](_0x205e('0x4d'))[_0x205e('0x14')]('id',_0x205e('0x4e'))[_0x205e('0x2e')](function(){_0x54110d();})[_0x205e('0x17')](_0x205e('0x48'));}function _0x14b7cc(){var _0x15e624=![];for(var _0x1280f2=0x0;_0x1280f2<scoreboard[_0x205e('0x21')];_0x1280f2++){if(totalScore>scoreboard[_0x1280f2][_0x205e('0x4f')]){_0x15e624=!![];}}if(_0x15e624){_0x279676();}scoreboard[_0x205e('0x50')](function(_0x5c205a,_0x2a2d32){return parseFloat(_0x2a2d32['points'])-parseFloat(_0x5c205a['points']);});if(_0x15e624){_0x3527ad();}_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x51'))[_0x205e('0x17')](_0x205e('0x46'));_0x588b46(document[_0x205e('0x12')]('h1'))[_0x205e('0x16')](_0x205e('0x52'))['attr']('id',_0x205e('0x53'))[_0x205e('0x17')](_0x205e('0x54'));_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))['attr']('id',_0x205e('0x55'))[_0x205e('0x25')](_0x205e('0x56'))[_0x205e('0x17')](_0x205e('0x54'));_0x588b46(document[_0x205e('0x12')]('div'))[_0x205e('0x14')]('id',_0x205e('0x57'))[_0x205e('0x17')](_0x205e('0x58'));_0x588b46(document[_0x205e('0x12')]('p'))[_0x205e('0x16')]('Nome')[_0x205e('0x17')]('#firstCelldesc');_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id','secondCelldesc')[_0x205e('0x17')](_0x205e('0x58'));_0x588b46(document[_0x205e('0x12')]('p'))[_0x205e('0x16')](_0x205e('0x59'))[_0x205e('0x17')](_0x205e('0x5a'));_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x5b'))[_0x205e('0x17')]('#descRow');_0x588b46(document[_0x205e('0x12')]('p'))['text']('Tempo')[_0x205e('0x17')](_0x205e('0x5c'));for(var _0x1280f2=0x0;_0x1280f2<scoreboard['length'];_0x1280f2++){if(_0x1280f2%0x2==0x0){_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))['attr']('id',_0x205e('0x56')+[_0x1280f2])[_0x205e('0x25')](_0x205e('0x56'))['appendTo']('#leaderboard');}else{_0x588b46(document['createElement'](_0x205e('0x1a')))['attr']('id',_0x205e('0x56')+[_0x1280f2])[_0x205e('0x25')](_0x205e('0x5d'))['addClass'](_0x205e('0x56'))[_0x205e('0x17')](_0x205e('0x54'));}_0x588b46(document[_0x205e('0x12')]('div'))[_0x205e('0x14')]('id',_0x205e('0x5e')+[_0x1280f2])[_0x205e('0x17')](_0x205e('0x5f')+[_0x1280f2]);_0x588b46(document[_0x205e('0x12')]('p'))[_0x205e('0x16')](scoreboard[_0x1280f2][_0x205e('0x60')])['appendTo'](_0x205e('0x61')+[_0x1280f2]);_0x588b46(document['createElement'](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x62')+[_0x1280f2])[_0x205e('0x17')](_0x205e('0x5f')+[_0x1280f2]);_0x588b46(document['createElement']('p'))[_0x205e('0x16')](scoreboard[_0x1280f2][_0x205e('0x4f')])[_0x205e('0x17')](_0x205e('0x63')+[_0x1280f2]);_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x64')+[_0x1280f2])[_0x205e('0x17')](_0x205e('0x5f')+[_0x1280f2]);_0x588b46(document[_0x205e('0x12')]('p'))[_0x205e('0x16')](scoreboard[_0x1280f2]['time'])[_0x205e('0x17')]('#thirdCell'+[_0x1280f2]);}_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x65'))['appendTo'](_0x205e('0x46'));_0x588b46(document[_0x205e('0x12')]('button'))[_0x205e('0x16')](_0x205e('0x66'))[_0x205e('0x14')]('id',_0x205e('0x4e'))[_0x205e('0x2e')](function(){location[_0x205e('0x67')]();})['appendTo'](_0x205e('0x68'));}function _0x3527ad(){var _0x32dcb4=new XMLHttpRequest();_0x32dcb4['open']('PUT',scoreurl,!![]);_0x32dcb4[_0x205e('0x69')](_0x205e('0x6a'),_0x205e('0x4'));_0x32dcb4[_0x205e('0x7')]=function(){};var _0x5db5d1=JSON[_0x205e('0x6b')](scoreboard);_0x32dcb4[_0x205e('0xb')](_0x5db5d1);}function _0x279676(){_0x588b46(document[_0x205e('0x12')]('h2'))[_0x205e('0x14')]('id',_0x205e('0x6c'))[_0x205e('0x16')](_0x205e('0x6d'))['insertAfter'](_0x205e('0x3c'));var _0x2f92ad=prompt(_0x205e('0x6e'));if(_0x2f92ad==null){_0x2f92ad=_0x205e('0x6f');}if(scoreboard[_0x205e('0x21')]>=scoreboardmaxlength){scoreboard['pop']();}scoreboard[_0x205e('0x70')]({'name':_0x2f92ad,'points':Math[_0x205e('0x3b')](totalScore),'time':timePassed});}function _0x54110d(){document[_0x205e('0x35')]('splashdiv')[_0x205e('0x2f')][_0x205e('0x3e')]='none';_0x586f31();}function _0x586f31(){myVar=setInterval(function(){timePassed++;},0x3e8);for(var _0x38e2bf=0x0;_0x38e2bf<numberOfQuestionsPerQuiz;_0x38e2bf++){var _0x1e55a8=Math[_0x205e('0x1d')](Math['random']()*quizQuestions[_0x205e('0x21')]);if(!questionsSelected[_0x205e('0x71')](_0x1e55a8)){questionsSelected[_0x205e('0x70')](_0x1e55a8);quiz[_0x205e('0x70')](quizQuestions[_0x1e55a8]);}else{_0x38e2bf--;}}_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))['attr']('id',_0x205e('0x72'))[_0x205e('0x17')](_0x205e('0x46'));if(typeof quiztitle!=='undefined'&&_0x588b46[_0x205e('0xf')](quiztitle)===_0x205e('0x73')){_0x588b46(document[_0x205e('0x12')]('h1'))[_0x205e('0x16')](quiztitle)[_0x205e('0x17')](_0x205e('0x74'));}else{_0x588b46(document[_0x205e('0x12')]('h1'))['text'](_0x205e('0x75'))[_0x205e('0x17')]('#quizContainer');}if(typeof quiz!==_0x205e('0xe')&&_0x588b46['type'](quiz)===_0x205e('0x76')){_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x25')]('bar')['attr']('id','infoBar')['appendTo'](_0x205e('0x74'));_0x588b46(document[_0x205e('0x12')]('p'))[_0x205e('0x25')](_0x205e('0x77'))['attr']('id',_0x205e('0x77'))[_0x205e('0x16')](_0x205e('0x78')+quiz[_0x205e('0x21')])[_0x205e('0x17')]('#infoBar');_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))[_0x205e('0x14')]('id',_0x205e('0x36'))[_0x205e('0x17')](_0x205e('0x79'));_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))['addClass'](_0x205e('0x7a'))[_0x205e('0x14')]('id',_0x205e('0x37'))['appendTo'](_0x205e('0x2a'));_0x588b46(document[_0x205e('0x12')]('h2'))[_0x205e('0x25')](_0x205e('0x1f'))[_0x205e('0x14')]('id',_0x205e('0x1f'))[_0x205e('0x16')](quiz[0x0][_0x205e('0x1f')])[_0x205e('0x17')]('#quizContainer');if(quiz[0x0]['hasOwnProperty'](_0x205e('0x23'))&&quiz[0x0][_0x205e('0x23')]!=''){_0x588b46(document[_0x205e('0x12')](_0x205e('0x24')))[_0x205e('0x25')](_0x205e('0x26'))[_0x205e('0x14')]('id','question-image')['attr'](_0x205e('0x27'),quiz[0x0]['image'])[_0x205e('0x17')](_0x205e('0x74'));}_0x588b46(document['createElement']('p'))[_0x205e('0x25')]('explanation')[_0x205e('0x14')]('id','explanation')[_0x205e('0x1c')](_0x205e('0x7b'))[_0x205e('0x17')](_0x205e('0x74'));_0x588b46(document[_0x205e('0x12')]('ul'))[_0x205e('0x14')]('id',_0x205e('0x7c'))['appendTo'](_0x205e('0x74'));_0x467194(quiz[0x0][_0x205e('0x2b')]);_0x588b46(document[_0x205e('0x12')](_0x205e('0x1a')))['addClass'](_0x205e('0x7d'))[_0x205e('0x14')]('id',_0x205e('0x7e'))[_0x205e('0x16')](_0x205e('0x7f'))[_0x205e('0x32')]({'font-weight':0x2bc,'color':_0x205e('0x80')})['appendTo'](_0x205e('0x74'));barWidth=document[_0x205e('0x35')]('progressBar')[_0x205e('0x81')];_0x4e3acf();_0x52d5ea(secondsToAnswer,secondsToAnswer,_0x588b46(_0x205e('0x2a')),!![]);_0x25a02f();}}_0x1e51b3();_0x1d8819(function(_0x329f81){scoreboard=JSON[_0x205e('0x82')](_0x329f81);});_0x32826f(function(_0x41978b){quizQuestions=JSON[_0x205e('0x82')](_0x41978b);});});
