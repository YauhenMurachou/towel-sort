
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if (!matrix || matrix.length === 0) {
		return []
	} else {
		return matrix.map((item, index) => (index % 2) ? item.reverse() : item).join(',').split(',').map(item => Number(item));
	}

}
