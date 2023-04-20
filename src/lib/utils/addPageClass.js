export default function addPageClass(node, className) {
	node.classList.add(className);
	return {
		destroy() {
			node.classList.remove(className);
		}
	};
}
