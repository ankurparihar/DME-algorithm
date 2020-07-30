const raymond__data = {
	navID: "nav-projects",
	page_loc_text: "Live Demo",
	template: ``,
	apply: (root, URLInfo) => {
		if (root === undefined) {
			console.warn('Error: contentRoot not specified')
			return
		}
		root.innerHTML = raymond__data.template
		bicast__data.onStaticLoad(root, URLInfo)
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
			showDialog(`<div class="card" style="height:auto"><div class="card__title headline">About BicastR</div><div class="card__text">BicastR can displays large image or video which doesn't fit on a single display, on multiple displays which put together re-creates the entire media and provides a rich viewing experience. It creates the effect of a larger display using combination of smaller displays.</div><div class="card__actions"><div class="spacer"></div><a target="_blank" rel="noopener" href="https://github.com/ankurparihar/BicastR" class="btn btn--flat green--text text--darken-1"><div class="btn__content">View on Github</div></a></div></div>`)
		})
		raymond__data.canvas = document.getElementById('canvas')
		raymond__data.context = raymond__data.canvas.getContext('2d')
		// Node class
		raymond__data.updateTopology()
		raymond__data.simulate()
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
					console.log('node ' + this.data + ' has entered critical section')
					this.checkpoint = 2
					raymond__data.nodeExecuteAnimation(this)
				}
				// Message handling mechanism
				this.handle_event = async (event, sender) => {
					if (event === 'enter critical section') {
						console.log('node ' + this.data + ' wants to enter critical section')
						this.fgColor = '#ff5622'
						this.queue.push(this)
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'request') {
						console.log('node ' + this.data + ' received request from node ' + sender.data)
						this.queue.push(sender)
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'privilege') {
						console.log('node ' + this.data + ' received the privilege')
						this.holder = this
						this.assign_privilege()
						this.make_request()
					}
					else if (event === 'exit critical section') {
						console.log('node ' + this.data + ' exits critical section')
						this.fgColor = '#ffffff'
						this.using = false
						raymond__data.drawGraph()
						this.assign_privilege()
						this.make_request()
					}
				}
				this.proceed = () => {
					if (this.checkpoint === 1) {
						console.log('node ' + this.data + ' passed the privilege to node ' + this.holder.data)
						this.holder.handle_event('privilege')
					}
					else if (this.checkpoint === 2) {
						console.log('node ' + this.data + ' has executed')
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
			nodes[0].queueGrowX = 0
			nodes[0].queueGrowY = 1
			nodes[1].queueX = nodes[1].cx - r
			nodes[1].queueY = nodes[1].cy - r
			nodes[1].queueGrowX = 0
			nodes[1].queueGrowY = 1
			nodes[2].queueX = nodes[2].cx + r + 10
			nodes[2].queueY = nodes[2].cy - 10
			nodes[2].queueGrowX = 0
			nodes[2].queueGrowY = 0
			nodes[3].queueX = nodes[3].cx - r
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
				paint(r + 10, 1)
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
		const timeout = node.workLoad / 36
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
			ctx.fillStyle = '#ddffdd'
			ctx.strokeStyle = '#007700'
			ctx.beginPath()
			ctx.arc(cx, cy, r, minPiBy2, a * Math.PI / 180 + minPiBy2)
			ctx.stroke()
			ctx.textAlign = 'center'
			ctx.font = '20px Arial'
			ctx.textBaseline = 'middle'
			ctx.lineWidth = 1
			ctx.fillStyle = '#ffffff'
			ctx.fillText(node.data, cx, cy)
			if (a > 0) {
				setTimeout(() => {
					paint(a - 10)
				}, timeout)
			} else {
				node.proceed()
			}
		}
		paint(360)
	},
	simulate: () => {
		raymond__data.nodes[0].handle_event('privilege')
		raymond__data.nodes.forEach(node => {
			setTimeout(() => {
				node.workLoad = Math.random() * 3000
				node.handle_event('enter critical section')
			}, Math.random() * 10000)
		})
	}
}

spa.register('/projects/DME-raymond', raymond__data)