const raymond__data = {
	navID: "nav-projects",
	page_loc_text: "Live Demo",
	template: `<div id="demo_page" class="demo-page page"><div class="demo_page-head flex"><div class="demo_page-back btn" title="Back to all projects"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"/></svg></div><div class="demo_page-title">Raymond's DME Algorithm</div><div class="demo_page-info btn" title="Info"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg></div></div><div class="demo_page-body"><div class="dme_graph"><canvas id="canvas" width="1000" height="600">Your browser does not support HTML canvas</canvas></div><div class="dme_controls"><div class="controls flex justify-center wrap"><button type="button" id="simulate_btn" class="btn btn--large btn--disabled">Simulate</button></div></div><div class="dme_controls"><div class="control_title">Topology</div><div class="dme_choice flex wrap justify-center"><button type="button" class="choice_box choice-rs btn btn--disabled"><div class="choice-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 650 600" style="width:130px;height:120px"><style>.circle,.line {stroke:#ffffff;paint-order:fill stroke markers;stroke-dasharray:none;stroke-linecap:round}.circle {fill: #ffffff;stroke-miterlimit:10;stroke-width:2}.line {fill:none;stroke-width:4}</style><g><path class="circle" d=" M 350 300 A 25 25 0 1 1 349.99998750000105 299.97500000416665 Z"></path><path class="circle" d=" M 475 300 A 25 25 0 1 1 474.99998750000105 299.97500000416665 Z"></path><path class="circle" d=" M 350 175 A 25 25 0 1 1 349.99998750000105 174.97500000416665 Z"></path><path class="circle" d=" M 225 300 A 25 25 0 1 1 224.99998750000105 299.97500000416665 Z"></path><path class="circle" d=" M 350 425 A 25 25 0 1 1 349.99998750000105 424.97500000416665 Z"></path><path class="circle" d=" M 600 300 A 25 25 0 1 1 599.999987500001 299.97500000416665 Z"></path><path class="circle" d=" M 350 50 A 25 25 0 1 1 349.99998750000105 49.97500000416665 Z"></path><path class="circle" d=" M 100 300 A 25 25 0 1 1 99.99998750000104 299.97500000416665 Z"></path><path class="circle" d=" M 350 550 A 25 25 0 1 1 349.99998750000105 549.9750000041666 Z"></path><path class="circle" d=" M 563.388347625 388.388347625 A 25 25 0 1 1 563.388335125001 388.36334762916664 Z"></path><path class="circle" d=" M 563.388347625 211.611652375 A 25 25 0 1 1 563.388335125001 211.58665237916665 Z"></path><path class="circle" d=" M 438.388347625 86.61165237499999 A 25 25 0 1 1 438.38833512500105 86.58665237916664 Z"></path><path class="circle" d=" M 261.611652375 86.61165237499999 A 25 25 0 1 1 261.61163987500106 86.58665237916664 Z"></path><path class="circle" d=" M 136.611652375 211.611652375 A 25 25 0 1 1 136.61163987500103 211.58665237916665 Z"></path><path class="circle" d=" M 136.611652375 388.388347625 A 25 25 0 1 1 136.61163987500103 388.36334762916664 Z"></path><path class="circle" d=" M 261.611652375 513.388347625 A 25 25 0 1 1 261.61163987500106 513.3633476291667 Z"></path><path class="circle" d=" M 438.388347625 513.388347625 A 25 25 0 1 1 438.38833512500105 513.3633476291667 Z"></path><path class="line" d=" M 425 300 L 350 300"></path><path class="line" d=" M 325 200 L 325 275"></path><path class="line" d=" M 225 300 L 300 300"></path><path class="line" d=" M 325 400 L 325 325"></path><path class="line" d=" M 550 300 L 475 300"></path><path class="line" d=" M 100 300 L 175 300"></path><path class="line" d=" M 325 525 L 325 450"></path><path class="line" d=" M 325 75 L 325 150"></path><path class="line" d=" M 520.7106781 370.7106781 L 467.67766952500006 317.67766952500006"></path><path class="line" d=" M 520.7106781 229.2893219 L 467.67766952500006 282.322330475"></path><path class="line" d=" M 395.7106781 104.28932189999999 L 342.67766952500006 157.322330475"></path><path class="line" d=" M 254.2893219 104.28932189999999 L 307.322330475 157.322330475"></path><path class="line" d=" M 129.2893219 229.2893219 L 182.322330475 282.322330475"></path><path class="line" d=" M 129.2893219 370.7106781 L 182.322330475 317.67766952500006"></path><path class="line" d=" M 254.2893219 495.7106781 L 307.322330475 442.67766952500006"></path><path class="line" d=" M 395.7106781 495.7106781 L 342.67766952500006 442.67766952500006"></path></g></svg></div><div class="choice-title">Radiating Star</div></button><button type="button" class="choice_box choice-p1 btn btn--disabled"><div class="choice-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 250" style="width:120px;height:50px"><style>.circle,.line {stroke:#ffffff;paint-order:fill stroke markers;stroke-dasharray:none;stroke-linecap:round}.circle {fill: #ffffff;stroke-miterlimit:10;stroke-width:2}.line {fill:none;stroke-width:4}</style><g><path class="circle" d=" M 162.5 158.25 A 25 25 0 1 1 162.49998750000105 158.22500000416665 Z"></path><path class="circle" d=" M 287.5 158.25 A 25 25 0 1 1 287.49998750000105 158.22500000416665 Z"></path><path class="circle" d=" M 412.5 158.25 A 25 25 0 1 1 412.49998750000105 158.22500000416665 Z"></path><path class="circle" d=" M 225 50 A 25 25 0 1 1 224.99998750000105 49.97500000416665 Z"></path><path class="circle" d=" M 350 50 A 25 25 0 1 1 349.99998750000105 49.97500000416665 Z"></path><path class="circle" d=" M 475 50 A 25 25 0 1 1 474.99998750000105 49.97500000416665 Z"></path><path class="line" d=" M 150 136.6 L 187.5 71.65"></path><path class="line" d=" M 250 136.6 L 212.5 71.65"></path><path class="line" d=" M 375 136.6 L 337.5 71.65"></path><path class="line" d=" M 300 50 L 225 50"></path><path class="line" d=" M 425 50 L 350 50"></path></g></svg></div><div class="choice-title">Paper Example 1</div></button><button type="button" class="choice_box choice-p2 btn btn--disabled choice_selected "><div class="choice-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 400" style="width:120px;height:80px"><style>.circle,.line {stroke:#ffffff;paint-order:fill stroke markers;stroke-dasharray:none;stroke-linecap:round}.circle {fill: #ffffff;stroke-miterlimit:10;stroke-width:2}.line {fill:none;stroke-width:4}</style><g><path class="circle" d=" M 325 75 A 25 25 0 1 1 324.99998750000105 74.97500000416665 Z"></path><path class="circle" d=" M 200 75 A 25 25 0 1 1 199.99998750000105 74.97500000416665 Z"></path><path class="circle" d=" M 325 200 A 25 25 0 1 1 324.99998750000105 199.97500000416665 Z"></path><path class="circle" d=" M 450 75 A 25 25 0 1 1 449.99998750000105 74.97500000416665 Z"></path><path class="circle" d=" M 75 75 A 25 25 0 1 1 74.99998750000104 74.97500000416665 Z"></path><path class="circle" d=" M 137.5 183.25 A 25 25 0 1 1 137.49998750000105 183.22500000416665 Z"></path><path class="circle" d=" M 262.5 308.25 A 25 25 0 1 1 262.49998750000105 308.22500000416665 Z"></path><path class="circle" d=" M 387.5 308.25 A 25 25 0 1 1 387.49998750000105 308.22500000416665 Z"></path><path class="circle" d=" M 512.5 183.25 A 25 25 0 1 1 512.499987500001 183.22500000416665 Z"></path><path class="circle" d=" M 575 75 A 25 25 0 1 1 574.999987500001 74.97500000416665 Z"></path><path class="line" d=" M 200 75 L 275 75"></path><path class="line" d=" M 300 175 L 300 100"></path><path class="line" d=" M 400 75 L 325 75"></path><path class="line" d=" M 75 75 L 150 75"></path><path class="line" d=" M 125 161.6 L 162.5 96.65"></path><path class="line" d=" M 250 286.6 L 287.5 221.65"></path><path class="line" d=" M 350 286.6 L 312.5 221.65"></path><path class="line" d=" M 475 161.6 L 437.5 96.65"></path><path class="line" d=" M 525 75 L 450 75"></path></g></svg></div><div class="choice-title">Paper Example 2</div></button><button type="button" class="choice_box choice-sl btn btn--disabled"><div class="choice-svg"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 150" style="width:120px;height:30px"><style>.circle,.line {stroke:#ffffff;paint-order:fill stroke markers;stroke-dasharray:none;stroke-linecap:round}.circle {fill: #ffffff;stroke-miterlimit:10;stroke-width:2}.line {fill:none;stroke-width:4}</style><g><path class="circle" d=" M 55 60 A 25 25 0 1 1 54.99998750000104 59.97500000416665 Z"></path><path class="circle" d=" M 155 60 A 25 25 0 1 1 154.99998750000105 59.97500000416665 Z"></path><path class="circle" d=" M 255 60 A 25 25 0 1 1 254.99998750000105 59.97500000416665 Z"></path><path class="circle" d=" M 355 60 A 25 25 0 1 1 354.99998750000105 59.97500000416665 Z"></path><path class="circle" d=" M 455 60 A 25 25 0 1 1 454.99998750000105 59.97500000416665 Z"></path><path class="circle" d=" M 555 60 A 25 25 0 1 1 554.999987500001 59.97500000416665 Z"></path><path class="line" fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 105 60 L 55 60"></path><path class="line" fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 205 60 L 155 60"></path><path class="line" fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 305 60 L 255 60"></path><path class="line" fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 405 60 L 355 60"></path><path class="line" fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 505 60 L 455 60"></path></g></svg></div><div class="choice-title">Straight Line</div></button></div></div><div class="dme_controls"><div class="control_title">Notation</div><div class="dme_symbols"><div class="notation-block"><svg viewBox="0 0 50 50" style="width:50px;height:50px"><circle stroke-width="2" stroke="#ffffff" fill="#30303000" cx="25" cy="25" r="24"/></svg><p>Idle node (May have non-empty queue)</p></div><div class="notation-block"><svg viewBox="0 0 50 50" style="width:50px;height:50px"><circle stroke-width="2" stroke="#ff5622" fill="#30303000" cx="25" cy="25" r="24"/></svg><p>Node wants to enter critical section</p></div><div class="notation-block"><svg class="node-exec" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50"><defs/><g><path fill="none" stroke="#ffffff" paint-order="fill stroke markers" d=" M 49 25 A 24 24 0 1 1 48.999988000001 24.976000003999985" stroke-width="2"/><path class="node-exec-path" fill="#007700" stroke="#ddffdd" paint-order="fill stroke markers" d="M 25 25 L 25 0 L 25 1 A 24 24 0 1 1 6.5 40.29 L 25 25" stroke-width="2" stroke-dasharray=""/></g></svg><p>Node executing critical section</p></div><div class="notation-block"><svg viewBox="0 0 50 50" style="width:50px;height:50px"><path stroke-width="1" stroke="#ffffff" fill="#30303000" d="M 25 15 L 25 35 L 37 35 L 37 15 L 13 15 L 13 35 L 25 35 Z"/><text x="15" y="30" fill="#ffffff">1</text><text x="27" y="30" fill="#ffffff">2</text></svg><p>Queue (front=left, back=right)</p></div><div class="notation-block"><svg viewBox="0 0 50 50" style="width:50px;height:50px"><path stroke-width="2" stroke="#ffffff" fill="#30303000" d="M 0 25 L 49 25 L 40 15 M 49 25 L 40 35"/></svg><p>Holder (right node is holder of left node)</p></div><div class="notation-block notation-token-transfer"><svg viewBox="0 0 50 50" style="width:50px;height:50px"><path stroke-width="2" stroke="#f00ff0" fill="#30303000" d="M 0 25 L 49 25 L 40 15 M 49 25 L 40 35"></path></svg><p>Token transfter from holder to node</p></div></div></div><div class="dme_controls flex justify-center column"><div class="control_title logs_title flex align-center"><svg viewBox="0 0 24 24" style="width:12px;height:12px;margin-right:10px"><path fill="#ffffff" d="M 0 0 L 12 24 L 24 0 Z" stroke="#ffffff"></path></svg><div>Logs</div></div><div class="logs_div elevation-10" data-simplebar></div></div></div></div>`,
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = raymond__data.template
		raymond__data.onStaticLoad(root, URLInfo)
	},
	onStaticLoad: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		const demoBackBtn = root.querySelector('.demo_page-back')
		const demoInfoBtn = root.querySelector('.demo_page-info')
		demoBackBtn.addEventListener('click', (e) => {
			if (e.ctrlKey) window.open(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			else {
				spa.navigate(URLInfo.protocol + '://' + URLInfo.domain + '/projects')
			}
			e.preventDefault()
		})
		demoInfoBtn.addEventListener('click', () => {
			showDialog(`<div class="card" style="height:auto"><div class="card__title headline">About Raymond's Algorithm</div><div class="card__text"><span class="highlight">Kerry Raymond</span>'s algorithm is a tree based message passing algorithm for mutual exclusion of critical section among concurrent processes. This project was assigned during the course <span class="highlight">Operating Systems (CSN-232)</span> at IIT Roorkee. It is an implementation of original algorihm.</div><div class="card__actions"><div class="spacer"></div><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/Raymond-algorithm/blob/github.io-dev/papers/Raymond's%20tree%20based%20algorithm.pdf" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View paper</div></a><a target="_blank" rel="noopener" href="/res-iitr?tab=4-1" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View course</div></a><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/Raymond-algorithm" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View on Github</div></a></div></div>`)
		})
		raymond__data.canvas = document.getElementById('canvas')
		raymond__data.context = raymond__data.canvas.getContext('2d')
		// simulate button
		const simulateBtn = document.getElementById('simulate_btn')
		simulateBtn.addEventListener('click', (e) => {
			showRippleEffect(e, simulateBtn)
		})
		simulateBtn.addEventListener('click', raymond__data.simulate)
		// change topology buttons
		const topo_rs_btn = document.querySelector('.choice-rs')
		const topo_p1_btn = document.querySelector('.choice-p1')
		const topo_p2_btn = document.querySelector('.choice-p2')
		const topo_sl_btn = document.querySelector('.choice-sl')
		topo_rs_btn.addEventListener('click', () => {
			if (raymond__data.topology !== 'radiating star') {
				if (raymond__data.pending === 0) {
					topo_rs_btn.classList.add('choice_selected')
					topo_p1_btn.classList.remove('choice_selected')
					topo_p2_btn.classList.remove('choice_selected')
					topo_sl_btn.classList.remove('choice_selected')
					raymond__data.topology = 'radiating star'
					raymond__data.updateTopology()
				}
			}
		})
		topo_p1_btn.addEventListener('click', () => {
			if (raymond__data.topology !== 'paper example 1') {
				if (raymond__data.pending === 0) {
					topo_rs_btn.classList.remove('choice_selected')
					topo_p1_btn.classList.add('choice_selected')
					topo_p2_btn.classList.remove('choice_selected')
					topo_sl_btn.classList.remove('choice_selected')
					raymond__data.topology = 'paper example 1'
					raymond__data.updateTopology()
				}
			}
		})
		topo_p2_btn.addEventListener('click', () => {
			if (raymond__data.topology !== 'paper example 2') {
				if (raymond__data.pending === 0) {
					topo_rs_btn.classList.remove('choice_selected')
					topo_p1_btn.classList.remove('choice_selected')
					topo_p2_btn.classList.add('choice_selected')
					topo_sl_btn.classList.remove('choice_selected')
					raymond__data.topology = 'paper example 2'
					raymond__data.updateTopology()
				}
			}
		})
		topo_sl_btn.addEventListener('click', () => {
			if (raymond__data.topology !== 'straight line') {
				if (raymond__data.pending === 0) {
					topo_rs_btn.classList.remove('choice_selected')
					topo_p1_btn.classList.remove('choice_selected')
					topo_p2_btn.classList.remove('choice_selected')
					topo_sl_btn.classList.add('choice_selected')
					raymond__data.topology = 'straight line'
					raymond__data.updateTopology()
				}
			}
		})
		// logs div simplebar
		const log_simplebar = new SimpleBar(document.querySelector('.logs_div'))
		raymond__data.logsDiv = log_simplebar.getContentElement()
		raymond__data.scrollElement = log_simplebar.getScrollElement()
		// Logs show/hide button
		const logToggleBtn = root.querySelector('.logs_title')
		const logsDiv = root.querySelector('.logs_div')
		logToggleBtn.addEventListener('click', () => {
			if(logToggleBtn.classList.contains('log_closed')) {
				logToggleBtn.classList.remove('log_closed')
				logsDiv.classList.remove('log_closed')
			}else {
				logToggleBtn.classList.add('log_closed')
				logsDiv.classList.add('log_closed')
			}
		})
		// Node class
		raymond__data.updateTopology()
		// Ready
		document.querySelectorAll('.demo_page-body button').forEach(btn => {
			btn.classList.remove('btn--disabled')
		})
	},
	canvas: undefined,
	/**	
	 * @type {CanvasRenderingContext2D}
	 */
	context: undefined,
	nodes: [],
	arrowLen: 75,
	nodeRadius: 25,
	topology: 'paper example 2',
	pending: 0,
	logsDiv: undefined,
	scrollElement: undefined,
	updateTopology: () => {
		class node {
			constructor(i, t, x, y) {
				this.cx = x					// x position of center of node
				this.cy = y					// y position of center of node
				this.data = t               // data to display inside node (max 2 characters for good visibility)
				this.id = i                 // unique id of node
				this.fgColor = '#ffffff'    // forground color - strokes and data
				this.bgColor = '#00000000'  // background color - filling
				this.holder = undefined     // next node to reach TOKEN
				this.using = false          // true if executing critical section
				this.asked = false          // true if request is sent
				this.queue = []             // queue to store node requests
				this.checkpoint = undefined // state variable used for simulation purpose (not related to algorithm)
				this.queueX = undefined     // queue coordinates
				this.queueY = undefined     // queue coordinates
				this.queueGrowX = undefined // queue orientation (0 = grow from start, 1 = grow from end)
				this.queueGrowY = undefined // queue orientation (0 = grow from top, 1 = grow from bottom)
				this.workLoad = 0           // amount of time in millisecond node takes to execute
				// Handles the use of TOKEN
				this.assign_privilege = () => {
					if (this.holder == this && this.using == false && this.queue.length > 0) {
						this.holder = this.queue[0]
						this.queue = this.queue.slice(1)
						this.asked = false
						raymond__data.drawGraph()
						if (this.holder == this) {
							this.using = true
							// start executing its critical section
							this.execute()
						}
						else {
							this.checkpoint = 1
							raymond__data.reverseArrowAnimation(this, this.holder, '#f00ff0')
						}
					}
				}
				// make request for the resource to the HOLDER
				this.make_request = () => {
					if (this.holder != this && this.asked == false && this.queue.length > 0) {
						this.asked = true
						this.holder.handle_event('request', this)
					}
				}
				// Critical Section Code
				this.execute = () => {
					raymond__data.log('enter_cs', `node <span class="highlight">${this.data}</span> has entered critical section`)
					this.checkpoint = 2
					raymond__data.nodeExecuteAnimation(this)
				}
				// Message handling mechanism
				this.handle_event = async (event, sender) => {
					if (event === 'enter critical section') {
						raymond__data.log('wants_cs', `node <span class="highlight">${this.data}</span> wants to enter critical section`)
						this.fgColor = '#ff5622'
						this.queue.push(this)
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'request') {
						raymond__data.log('request', `node <span class="highlight">${this.data}</span> received request from node <span class="highlight">${sender.data}</span>`)
						this.queue.push(sender)
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'privilege') {
						raymond__data.log('token', `node <span class="highlight">${this.data}</span> received the privilege`)
						this.holder = this
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'exit critical section') {
						raymond__data.log('exit_cs', `node <span class="highlight">${this.data}</span> exits critical section`)
						this.fgColor = '#ffffff'
						this.using = false
						raymond__data.drawGraph()
						this.assign_privilege()
						this.make_request()
					}
				}
				this.proceed = () => {
					if (this.checkpoint === 1) {
						raymond__data.log('token', `node <span class="highlight">${this.data}</span> passed the privilege to node <span class="highlight">${this.holder.data}</span>`)
						this.holder.handle_event('privilege')
					}
					else if (this.checkpoint === 2) {
						raymond__data.pending--
						if (raymond__data.pending === 0) {
							document.querySelectorAll('.demo_page-body button').forEach(btn => {
								btn.classList.remove('btn--disabled')
							})
						}
						raymond__data.log('exec', `node <span class="highlight">${this.data}</span> has executed`)
						this.handle_event('exit critical section')
					}
				}
			}
		}
		if (raymond__data.topology === 'radiating star') {
			raymond__data.canvas.width = 650
			raymond__data.canvas.height = 600
			raymond__data.nodeRadius = 25
			raymond__data.arrowLen = 75
			const nodes = []
			const r = raymond__data.nodeRadius
			const a = raymond__data.arrowLen
			const f = a + (2 * r)
			for (var i = 0; i < 17; ++i) {
				nodes.push(new node(i, i))
			}
			var x = 325
			var y = 300
			const d = f * 0.707106781

			// assign node coordinates
			nodes[0].cx = x
			nodes[0].cy = y
			nodes[1].cx = x + f
			nodes[1].cy = y
			nodes[2].cx = x
			nodes[2].cy = y - f
			nodes[3].cx = x - f
			nodes[3].cy = y
			nodes[4].cx = x
			nodes[4].cy = y + f
			x += f
			nodes[5].cx = x + d
			nodes[5].cy = y + d
			nodes[6].cx = x + f
			nodes[6].cy = y
			nodes[7].cx = x + d
			nodes[7].cy = y - d
			x -= f
			y -= f
			nodes[8].cx = x + d
			nodes[8].cy = y - d
			nodes[9].cx = x
			nodes[9].cy = y - f
			nodes[10].cx = x - d
			nodes[10].cy = y - d
			x -= f
			y += f
			nodes[11].cx = x - d
			nodes[11].cy = y - d
			nodes[12].cx = x - f
			nodes[12].cy = y
			nodes[13].cx = x - d
			nodes[13].cy = y + d
			x += f
			y += f
			nodes[14].cx = x - d
			nodes[14].cy = y + d
			nodes[15].cx = x
			nodes[15].cy = y + f
			nodes[16].cx = x + d
			nodes[16].cy = y + d

			// assign holders
			nodes[1].holder = nodes[0]
			nodes[2].holder = nodes[0]
			nodes[3].holder = nodes[0]
			nodes[4].holder = nodes[0]
			nodes[5].holder = nodes[1]
			nodes[6].holder = nodes[1]
			nodes[7].holder = nodes[1]
			nodes[8].holder = nodes[2]
			nodes[9].holder = nodes[2]
			nodes[10].holder = nodes[2]
			nodes[11].holder = nodes[3]
			nodes[12].holder = nodes[3]
			nodes[13].holder = nodes[3]
			nodes[14].holder = nodes[4]
			nodes[15].holder = nodes[4]
			nodes[16].holder = nodes[4]

			// queue orientation
			nodes[0].queueX = nodes[0].cx + r
			nodes[0].queueY = nodes[0].cy + r
			nodes[0].queueGrowX = 0
			nodes[0].queueGrowY = 0
			nodes[1].queueX = nodes[1].cx - r
			nodes[1].queueY = nodes[1].cy - r
			nodes[1].queueGrowX = 1
			nodes[1].queueGrowY = 1
			nodes[2].queueX = nodes[2].cx + r
			nodes[2].queueY = nodes[2].cy + r
			nodes[2].queueGrowX = 0
			nodes[2].queueGrowY = 0
			nodes[3].queueX = nodes[3].cx + r
			nodes[3].queueY = nodes[3].cy - r
			nodes[3].queueGrowX = 0
			nodes[3].queueGrowY = 1
			nodes[4].queueX = nodes[4].cx + r + 10
			nodes[4].queueY = nodes[4].cy - 10
			nodes[4].queueGrowX = 0
			nodes[4].queueGrowY = 0
			nodes[5].queueX = nodes[5].cx + r + 10
			nodes[5].queueY = nodes[5].cy - 10
			nodes[5].queueGrowX = 0
			nodes[5].queueGrowY = 0
			nodes[6].queueX = nodes[6].cx + r + 10
			nodes[6].queueY = nodes[6].cy - 10
			nodes[6].queueGrowX = 0
			nodes[6].queueGrowY = 0
			nodes[7].queueX = nodes[7].cx + r + 10
			nodes[7].queueY = nodes[7].cy - 10
			nodes[7].queueGrowX = 0
			nodes[7].queueGrowY = 0
			nodes[8].queueX = nodes[8].cx + r + 10
			nodes[8].queueY = nodes[8].cy - 10
			nodes[8].queueGrowX = 0
			nodes[8].queueGrowY = 0
			nodes[9].queueX = nodes[9].cx + r + 10
			nodes[9].queueY = nodes[9].cy - 10
			nodes[9].queueGrowX = 0
			nodes[9].queueGrowY = 0
			nodes[10].queueX = nodes[10].cx - r - 10
			nodes[10].queueY = nodes[10].cy - 10
			nodes[10].queueGrowX = 1
			nodes[10].queueGrowY = 0
			nodes[11].queueX = nodes[11].cx - r - 10
			nodes[11].queueY = nodes[11].cy - 10
			nodes[11].queueGrowX = 1
			nodes[11].queueGrowY = 0
			nodes[12].queueX = nodes[12].cx - r - 10
			nodes[12].queueY = nodes[12].cy - 10
			nodes[12].queueGrowX = 1
			nodes[12].queueGrowY = 0
			nodes[13].queueX = nodes[13].cx - r - 10
			nodes[13].queueY = nodes[13].cy - 10
			nodes[13].queueGrowX = 1
			nodes[13].queueGrowY = 0
			nodes[14].queueX = nodes[14].cx - r - 10
			nodes[14].queueY = nodes[14].cy - 10
			nodes[14].queueGrowX = 1
			nodes[14].queueGrowY = 0
			nodes[15].queueX = nodes[15].cx + r
			nodes[15].queueY = nodes[15].cy + r
			nodes[15].queueGrowX = 0
			nodes[15].queueGrowY = 0
			nodes[16].queueX = nodes[16].cx + r + 10
			nodes[16].queueY = nodes[16].cy - 10
			nodes[16].queueGrowX = 0
			nodes[16].queueGrowY = 0

			raymond__data.nodes = nodes
		}
		else if (raymond__data.topology === 'straight line') {
			raymond__data.canvas.width = 600
			raymond__data.canvas.height = 150
			raymond__data.nodeRadius = 25
			raymond__data.arrowLen = 50
			const nodes = []
			const r = raymond__data.nodeRadius
			var x = 30
			var y = 60
			const d = raymond__data.arrowLen + (2 * raymond__data.nodeRadius)
			nodes.push(new node(0, 0, x, y))
			nodes[0].queueX = x + r
			nodes[0].queueY = y + r
			nodes[0].queueGrowX = 0
			nodes[0].queueGrowY = 0
			for (var i = 1; i < 6; ++i) {
				x += d
				nodes.push(new node(i, i, x, y))
				nodes[i].holder = nodes[i - 1]
				nodes[i].queueX = x + r
				nodes[i].queueY = y + r
				nodes[i].queueGrowX = 0
				nodes[i].queueGrowY = 0
			}
			raymond__data.nodes = nodes
		}
		else if (raymond__data.topology === 'paper example 1') {
			raymond__data.canvas.width = 600
			raymond__data.canvas.height = 250
			raymond__data.nodeRadius = 25
			raymond__data.arrowLen = 75
			const nodes = []
			nodes.push(new node(0, 'A', 200, 50))
			nodes.push(new node(1, 'B', 137.5, 158.25))
			nodes.push(new node(2, 'C', 262.5, 158.25))
			nodes.push(new node(3, 'D', 325, 50))
			nodes.push(new node(4, 'E', 450, 50))
			nodes.push(new node(5, 'F', 387.5, 158.25))
			nodes[1].holder = nodes[0]
			nodes[2].holder = nodes[0]
			nodes[3].holder = nodes[0]
			nodes[4].holder = nodes[3]
			nodes[5].holder = nodes[3]
			// queues
			nodes[0].queueX = 165
			nodes[0].queueY = 40
			nodes[0].queueGrowX = 1
			nodes[0].queueGrowY = 0
			nodes[1].queueX = 172.5
			nodes[1].queueY = 148.25
			nodes[1].queueGrowX = 0
			nodes[1].queueGrowY = 0
			nodes[2].queueX = 297.5
			nodes[2].queueY = 148.25
			nodes[2].queueGrowX = 0
			nodes[2].queueGrowY = 0
			nodes[3].queueX = 300
			nodes[3].queueY = 75
			nodes[3].queueGrowX = 1
			nodes[3].queueGrowY = 0
			nodes[4].queueX = 475
			nodes[4].queueY = 75
			nodes[4].queueGrowX = 0
			nodes[4].queueGrowY = 0
			nodes[5].queueX = 422.5
			nodes[5].queueY = 148.25
			nodes[5].queueGrowX = 0
			nodes[5].queueGrowY = 0
			raymond__data.nodes = nodes
		}
		else if (raymond__data.topology === 'paper example 2') {
			raymond__data.canvas.width = 600
			raymond__data.canvas.height = 400
			raymond__data.nodeRadius = 25
			raymond__data.arrowLen = 75
			const r = raymond__data.nodeRadius
			const nodes = []
			nodes.push(new node(0, 1, 300, 75))
			nodes.push(new node(1, 2, 175, 75))
			nodes.push(new node(2, 3, 300, 200))
			nodes.push(new node(3, 4, 425, 75))
			nodes.push(new node(4, 5, 50, 75))
			nodes.push(new node(5, 6, 112.5, 183.25))
			nodes.push(new node(6, 7, 237.5, 308.25))
			nodes.push(new node(7, 8, 362.5, 308.25))
			nodes.push(new node(8, 9, 487.5, 183.25))
			nodes.push(new node(9, 10, 550, 75))
			nodes[1].holder = nodes[0]
			nodes[2].holder = nodes[0]
			nodes[3].holder = nodes[0]
			nodes[4].holder = nodes[1]
			nodes[5].holder = nodes[1]
			nodes[6].holder = nodes[2]
			nodes[7].holder = nodes[2]
			nodes[8].holder = nodes[3]
			nodes[9].holder = nodes[3]
			// queues
			nodes[0].queueX = nodes[0].cx - r
			nodes[0].queueY = nodes[0].cy - r
			nodes[0].queueGrowX = 1
			nodes[0].queueGrowY = 1
			nodes[1].queueX = nodes[1].cx - r
			nodes[1].queueY = nodes[1].cy - r
			nodes[1].queueGrowX = 1
			nodes[1].queueGrowY = 1
			nodes[2].queueX = nodes[2].cx + r + 10
			nodes[2].queueY = nodes[2].cy - 10
			nodes[2].queueGrowX = 0
			nodes[2].queueGrowY = 0
			nodes[3].queueX = nodes[3].cx + r
			nodes[3].queueY = nodes[3].cy - r
			nodes[3].queueGrowX = 0
			nodes[3].queueGrowY = 1
			nodes[4].queueX = nodes[4].cx + r
			nodes[4].queueY = nodes[4].cy + r
			nodes[4].queueGrowX = 0
			nodes[4].queueGrowY = 0
			nodes[5].queueX = nodes[5].cx + r
			nodes[5].queueY = nodes[5].cy + r
			nodes[5].queueGrowX = 0
			nodes[5].queueGrowY = 0
			nodes[6].queueX = nodes[6].cx + r
			nodes[6].queueY = nodes[6].cy + r
			nodes[6].queueGrowX = 0
			nodes[6].queueGrowY = 0
			nodes[7].queueX = nodes[7].cx + r
			nodes[7].queueY = nodes[7].cy + r
			nodes[7].queueGrowX = 0
			nodes[7].queueGrowY = 0
			nodes[8].queueX = nodes[8].cx + r
			nodes[8].queueY = nodes[8].cy + r
			nodes[8].queueGrowX = 0
			nodes[8].queueGrowY = 0
			nodes[9].queueX = nodes[9].cx + r
			nodes[9].queueY = nodes[9].cy + r
			nodes[9].queueGrowX = 0
			nodes[9].queueGrowY = 0
			raymond__data.nodes = nodes
		}
		raymond__data.drawGraph()
	},
	drawGraph: () => {
		// clear canvas
		const ctx = raymond__data.context
		ctx.clearRect(0, 0, raymond__data.canvas.width, raymond__data.canvas.height)
		const nodes = raymond__data.nodes
		const n = nodes.length
		if (n == 0) return
		const m1 = raymond__data.nodeRadius
		const m2 = m1 + raymond__data.arrowLen
		const m12 = m1 + m2
		nodes.forEach(node => {
			raymond__data.drawNode(node)
			const holder = node.holder
			if (holder != undefined && holder != node) {
				raymond__data.drawArrow((m1 * holder.cx + m2 * node.cx) / m12, (m1 * holder.cy + m2 * node.cy) / m12, (m1 * node.cx + m2 * holder.cx) / m12, (m1 * node.cy + m2 * holder.cy) / m12, '#ffffff')
			}
			raymond__data.drawQueue(node.queue, node.queueGrowX, node.queueGrowY, node.queueX, node.queueY)
		})
	},
	drawNode: (node) => {
		const cx = node.cx
		const cy = node.cy
		const t = node.data
		const fgColor = node.fgColor
		const bgColor = node.bgColor
		const r = raymond__data.nodeRadius
		const ctx = raymond__data.context
		ctx.fillStyle = bgColor
		ctx.strokeStyle = fgColor
		ctx.lineWidth = 2
		ctx.beginPath()
		ctx.arc(cx, cy, r, 0, Math.PI * 2)
		ctx.closePath()
		ctx.fill()
		ctx.stroke()
		ctx.textAlign = 'center'
		ctx.font = '20px Arial'
		ctx.textBaseline = 'middle'
		ctx.lineWidth = 1
		ctx.fillStyle = fgColor
		ctx.fillText(t, cx, cy)
	},
	deleteNode: (node) => {
		const ctx = raymond__data.context
		var saved = ctx.globalCompositeOperation
		ctx.globalCompositeOperation = 'destination-out'
		ctx.lineWidth = 2
		ctx.beginPath()
		ctx.arc(node.cx, node.cy, raymond__data.nodeRadius + 1, 0, Math.PI * 2)
		ctx.fill()
		ctx.stroke()
		ctx.globalCompositeOperation = saved
	},
	drawArrow: (from_x, from_y, to_x, to_y, color) => {
		const headlen = 10
		const angle = Math.atan2(to_y - from_y, to_x - from_x)
		const ctx = raymond__data.context
		ctx.lineCap = 'round'
		ctx.lineWidth = 1
		ctx.strokeStyle = color
		ctx.beginPath()
		ctx.moveTo(from_x, from_y)
		ctx.lineTo(to_x, to_y)
		ctx.lineTo(to_x - headlen * Math.cos(angle - Math.PI / 6), to_y - headlen * Math.sin(angle - Math.PI / 6))
		ctx.moveTo(to_x, to_y)
		ctx.lineTo(to_x - headlen * Math.cos(angle + Math.PI / 6), to_y - headlen * Math.sin(angle + Math.PI / 6))
		ctx.stroke()
	},
	deleteArrow: (from_x, from_y, to_x, to_y) => {
		const ctx = raymond__data.context
		const angle = Math.atan2(to_y - from_y, to_x - from_x)
		const tenSinTheta = 10 * Math.sin(angle)
		const tenCosTheta = 10 * Math.cos(angle)
		var saved = ctx.globalCompositeOperation
		ctx.globalCompositeOperation = 'destination-out'
		ctx.beginPath()
		ctx.moveTo(from_x + tenSinTheta, from_y - tenCosTheta)
		ctx.lineTo(from_x - tenSinTheta, from_y + tenCosTheta)
		ctx.lineTo(to_x - tenSinTheta, to_y + tenCosTheta)
		ctx.lineTo(to_x + tenSinTheta, to_y - tenCosTheta)
		ctx.closePath()
		ctx.fill()
		ctx.globalCompositeOperation = saved
	},
	drawQueue: (queue, growX, growY, x, y) => {
		const ctx = raymond__data.context
		const width = 16
		const height = 20
		ctx.lineWidth = 1
		ctx.strokeStyle = '#ffffff'
		ctx.fillStyle = '#ffffff'
		const n = queue.length
		var ni
		var x, y
		var dx, dy
		if (growX === 0) { dx = width }
		else if (growX === 1) { dx = -width }
		else { return }
		if (growY === 0) { dy = height }
		else if (growY === 1) { dy = -height }
		else { return }
		for (var i = 0; i < n; ++i) {
			ni = (growX === 0) ? queue[i] : queue[n - 1 - i]
			ctx.beginPath()
			ctx.moveTo(x, y)
			ctx.lineTo(x + dx, y)
			ctx.lineTo(x + dx, y + dy)
			ctx.lineTo(x, y + dy)
			ctx.closePath()
			ctx.stroke()
			ctx.textAlign = 'center'
			ctx.font = '12px Arial'
			ctx.textBaseline = 'middle'
			ctx.lineWidth = 1
			ctx.fillText(ni.data, x + dx / 2, y + dy / 2)
			x += dx
		}
	},
	reverseArrowAnimation: (to_node, from_node, color) => {
		var m1 = raymond__data.nodeRadius
		var m2 = m1 + raymond__data.arrowLen
		var m12 = m1 + m2
		const from_x = (m1 * to_node.cx + m2 * from_node.cx) / m12
		const from_y = (m1 * to_node.cy + m2 * from_node.cy) / m12
		const to_x = (m1 * from_node.cx + m2 * to_node.cx) / m12
		const to_y = (m1 * from_node.cy + m2 * to_node.cy) / m12
		const h = 10
		const angle = Math.atan2(to_y - from_y, to_x - from_x)
		const ctx = raymond__data.context
		ctx.lineCap = 'round'
		ctx.lineWidth = 1
		var rad = 0
		const midX = (from_x + to_x) / 2
		const midY = (from_y + to_y) / 2
		const halfLen = raymond__data.arrowLen / 2
		var m1, m2
		var m12 = raymond__data.arrowLen
		var head_x, head_y
		const cosTheta = Math.cos(angle)
		const sinTheta = Math.sin(angle)
		const cosPiBy6 = Math.cos(Math.PI / 6)
		const sinPiBy6 = Math.cos(Math.PI / 6)
		const hSinPiBy6 = h * sinPiBy6
		const hCosPiBy6 = h * cosPiBy6
		var k
		function paint(r, paintColor) {
			if (paintColor == 0) {
				raymond__data.deleteArrow(from_x, from_y, to_x, to_y)
			} else {
				ctx.beginPath()
				ctx.closePath()
				ctx.strokeStyle = color
				rad = r * Math.PI / 180
				m1 = halfLen * (1 + Math.cos(rad))
				m2 = m12 - m1
				k = (halfLen - hCosPiBy6) * Math.cos(rad)
				head_x = (m2 * from_x + m1 * to_x) / m12
				head_y = (m2 * from_y + m1 * to_y) / m12
				ctx.moveTo((m1 * from_x + m2 * to_x) / m12, (m1 * from_y + m2 * to_y) / m12)
				ctx.lineTo(head_x, head_y)
				ctx.lineTo(midX - hSinPiBy6 * sinTheta + k * cosTheta, midY + hSinPiBy6 * cosTheta + k * sinTheta)
				ctx.moveTo(head_x, head_y)
				ctx.lineTo(midX + hSinPiBy6 * sinTheta + k * cosTheta, midY - hSinPiBy6 * cosTheta + k * sinTheta)
				ctx.stroke()
			}
			if (paintColor === 0) {
				paint(r + 5, 1)
			}
			else {
				if (r < 180) {
					setTimeout(() => {
						paint(r, 0)
					}, 10)
				}
				else {
					to_node.proceed()
				}
			}
		}
		paint(0, 0)
	},
	nodeExecuteAnimation: (node) => {
		const ctx = raymond__data.context
		const cx = node.cx
		const cy = node.cy
		const r = raymond__data.nodeRadius
		const timeout = node.workLoad / 72
		var saved = ctx.globalCompositeOperation
		const minPiBy2 = - Math.PI / 2
		function paint(a) {
			raymond__data.drawGraph()
			ctx.globalCompositeOperation = 'destination-out'
			ctx.lineWidth = 2
			ctx.beginPath()
			ctx.arc(cx, cy, r + 1, 0, Math.PI * 2)
			ctx.fill()
			ctx.stroke()
			ctx.globalCompositeOperation = saved
			ctx.beginPath()
			ctx.arc(cx, cy, r, 0, Math.PI * 2)
			ctx.strokeStyle = '#ffffff'
			ctx.stroke()
			ctx.fillStyle = '#007700'
			ctx.strokeStyle = '#ddffdd'
			ctx.beginPath()
			ctx.moveTo(cx, cy)
			ctx.lineTo(cx, cy-r)
			ctx.arc(cx, cy, r, minPiBy2, a * Math.PI / 180 + minPiBy2)
			ctx.lineTo(cx, cy)
			ctx.fill()
			ctx.stroke()
			ctx.textAlign = 'center'
			ctx.font = '20px Arial'
			ctx.textBaseline = 'middle'
			ctx.lineWidth = 1
			ctx.fillStyle = '#ffffff'
			ctx.fillText(node.data, cx, cy)
			if (a > 0) {
				setTimeout(() => {
					paint(a - 5)
				}, timeout)
			} else {
				node.proceed()
			}
		}
		paint(360)
	},
	simulate: () => {
		const top = raymond__data.canvas.getBoundingClientRect().y
		if (top < 60) {
			const offSet = 60 - top
			var loop = (offSet + 20) / 20
			var id
			id = setInterval(function () {
				document.documentElement.scrollBy(0, -20) || document.body.scrollBy(0, -20)
				loop--
				if (loop <= 0) {
					clearInterval(id)
				}
			}, 10);
		}
		document.querySelectorAll('.demo_page-body button').forEach(btn => {
			btn.classList.add('btn--disabled')
		})
		raymond__data.logsDiv.innerHTML = ''
		raymond__data.updateTopology()
		raymond__data.nodes[0].handle_event('privilege')
		raymond__data.nodes.forEach(node => {
			raymond__data.pending++
			setTimeout(() => {
				node.workLoad = Math.random() * 3000
				raymond__data.log('workload', `node <span class="highlight">${node.data}</span> workload = ${Math.floor(node.workLoad)}ms`)
				node.handle_event('enter critical section')
			}, Math.random() * 10000)
		})
	},
	log: (cls, msg) => {
		var p = document.createElement('p')
		var type
		if (cls === 'workload') {
			type = '[WORKLOAD]'
		}
		switch (cls) {
			case 'workload':
				type = 'WORKLOAD'
				break;
			case 'token':
				type = 'TOKEN&nbsp;&nbsp;&nbsp;'
				break;
			case 'enter_cs':
				type = 'ENTER CS'
				break;
			case 'exit_cs':
				type = 'EXIT CS&nbsp;'
				break;
			case 'wants_cs':
				type = 'WANTS CS'
				break;
			case 'exec':
				type = 'EXECUTE&nbsp;'
				break;
			case 'request':
				type = 'REQUEST&nbsp;'
				break;
			default:
				type = '--------'
				break;
		}
		p.innerHTML = `&nbsp;<span class="${cls}">[${type}]</span> ${msg}`
		raymond__data.logsDiv.appendChild(p)
		raymond__data.scrollElement.scrollTop = raymond__data.scrollElement.scrollHeight + 50
	}
}

spa.register('/projects/DME-raymond', raymond__data)