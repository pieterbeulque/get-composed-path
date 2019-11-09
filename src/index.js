export default function getComposedPath(e) {
	// If the standards compliant composedPath method exists
	if (typeof e.composedPath === 'function') {
		return e.composedPath();
	}

	// If the non-standards `path` property exists and is an array
	if (Array.isArray(e.path)) {
		return e.path;
	}

	const path = [e.target];
	let node = e.target;

	while (node.parentNode) {
		node = node.parentNode;
		path.push(node);
	}

	return path;
}