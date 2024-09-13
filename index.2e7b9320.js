const e={idle:"idle",playing:"playing",win:"win",lose:"lose"};class t{constructor(e,t,s){let i=document.createElement("div");i.classList.add("field-cell"),e.append(i),this.x=t,this.y=s,this.linkedTile=null,this.linkedTileForMerge=null}linkTile(e){e.setXY(this.x,this.y),this.linkedTile=e}linkTileForMerge(e){e.setXY(this.x,this.y),this.linkedTileForMerge=e}hasTileForMerge(){return!!this.linkedTileForMerge}isEmpty(){return!this.linkedTile}unlinkTile(){this.linkedTile=null}unlinkTileForMerge(){this.linkedTileForMerge=null}canAccept(e){return this.isEmpty()||!this.hasTileForMerge()&&this.linkedTile.value===e.value}mergeTiles(){let e=this.linkedTile.value+this.linkedTileForMerge.value,t=this.linkedTile.tileElement;return t.classList.add("merge"),t.addEventListener("animationend",()=>{t.classList.remove("merge")},{once:!0}),this.linkedTile.setValue(e),this.linkedTileForMerge.removeFromDom(),this.unlinkTileForMerge(),e}}class s{constructor(e){this.tileElement=document.createElement("div"),this.tileElement.classList.add("tile","field-cell","show"),this.setValue(Math.random()>.1?2:4),this.tileElement.textContent=this.value,e.append(this.tileElement),this.tileElement.addEventListener("animationend",()=>{this.tileElement.classList.remove("show")},{once:!0})}setXY(e,t){this.x=e,this.y=t,this.tileElement.style.setProperty("--x",e),this.tileElement.style.setProperty("--y",t)}setValue(e){this.value=e,this.tileElement.textContent=this.value,this.tileElement.classList.forEach(e=>{e.startsWith("field-cell--")&&this.tileElement.classList.remove(e)}),this.tileElement.classList.add(`field-cell--${this.value}`)}removeFromDom(){this.tileElement.remove()}waitForTransitionEnd(){return new Promise((e,t)=>{this.tileElement.addEventListener("transitionend",e,{once:!0})})}}const i=document.querySelector(".game-field"),l=document.querySelector(".button"),n=new class{constructor(s){this.gameField=s,this.cells=[],this.status=e.idle,this.score=0;for(let e=0;e<16;e++)this.cells.push(new t(s,e%4,Math.floor(e/4)));this.cellsGroupedByColumn=this.groupCellsByColumn(),this.cellsGroupedByReversColumn=this.cellsGroupedByColumn.map(e=>[...e].reverse()),this.cellsGroupByRow=this.groupCellsByRow(),this.cellsGroupByReversRow=this.cellsGroupByRow.map(e=>[...e].reverse())}start(){this.status=e.playing,this.getRandomEmptyCell().linkTile(new s(this.gameField)),this.getRandomEmptyCell().linkTile(new s(this.gameField))}restart(){this.cells.forEach(e=>{e.linkedTile&&(e.linkedTile.removeFromDom(),e.unlinkTile())}),this.status=e.idle,this.score=0}getScore(){return this.score}getStatus(){return this.status}getRandomEmptyCell(){let e=this.cells.filter(e=>e.isEmpty()),t=Math.floor(Math.random()*e.length);return e[t]}groupCellsByColumn(){return this.cells.reduce((e,t)=>(e[t.x]=e[t.x]||[],e[t.x][t.y]=t,e),[])}groupCellsByRow(){return this.cells.reduce((e,t)=>(e[t.y]=e[t.y]||[],e[t.y][t.x]=t,e),[])}async slideTiles(e){let t=[];e.forEach(e=>this.slideTilesInGroup(e,t)),await Promise.all(t),this.cells.forEach(e=>{e.hasTileForMerge()&&(this.score+=e.mergeTiles())})}slideTilesInGroup(e,t){for(let s=1;s<e.length;s++){let i;if(e[s].isEmpty())continue;let l=e[s],n=s-1;for(;n>=0&&e[n].canAccept(l.linkedTile);)i=e[n],n--;i&&(t.push(l.linkTile.waitForTransitionEnd),i.isEmpty()?i.linkTile(l.linkedTile):i.linkTileForMerge(l.linkedTile),l.unlinkTile())}}canMove(e){return e.some(e=>this.canMoveInGroup(e))}canMoveInGroup(e){return e.some((t,s)=>!(0===s||t.isEmpty())&&e[s-1].canAccept(t.linkedTile))}canPlay(){this.canMove(this.cellsGroupedByColumn)||this.canMove(this.cellsGroupedByReversColumn)||this.canMove(this.cellsGroupByRow)||this.canMove(this.cellsGroupByReversRow)||(this.status=e.lose)}async moveUp(){await this.move(this.cellsGroupedByColumn)}async moveDown(){await this.move(this.cellsGroupedByReversColumn)}async moveLeft(){await this.move(this.cellsGroupByRow)}async moveRight(){await this.move(this.cellsGroupByReversRow)}async move(e){if(this.canMove(e)){let t=new s(this.gameField);await this.slideTiles(e),this.getRandomEmptyCell().linkTile(t)}this.canPlay()}}(i),r=document.querySelector(".game-score"),[o,a,h]=document.querySelector(".message-container").children;async function c(t){switch(t.key){case"ArrowUp":await n.moveUp();break;case"ArrowDown":await n.moveDown();break;case"ArrowLeft":await n.moveLeft();break;case"ArrowRight":await n.moveRight()}r.textContent=n.getScore(),n.getStatus()===e.lose?(window.removeEventListener("keydown",c),o.classList.remove("hidden")):n.getStatus()===e.win&&(window.removeEventListener("keydown",c),a.classList.remove("hidden"))}l.addEventListener("click",e=>{e.target.classList.contains("start")?(n.start(),l.classList.remove("start"),l.classList.add("restart"),l.textContent="Restart",h.classList.add("hidden"),window.addEventListener("keydown",c)):e.target.classList.contains("restart")&&(n.restart(),l.classList.add("start"),l.classList.remove("restart"),l.textContent="Start",h.classList.remove("hidden"),o.classList.add("hidden"),a.classList.add("hidden"),r.textContent=n.getScore(),window.removeEventListener("keydown",c))});
//# sourceMappingURL=index.2e7b9320.js.map
