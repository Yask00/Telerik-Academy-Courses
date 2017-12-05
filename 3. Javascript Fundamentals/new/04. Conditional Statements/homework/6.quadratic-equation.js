function quadraticEquation(args) {
	var discriminant,
		x1,
		x2,
		a = +args[0],
		b = +args[1],
		c = +args[2];
	discriminant = (b * b) - (4 * a * c);

	if (discriminant < 0) {
		return 'no real roots';
	}

	else if (!discriminant) {
		x1 = -b / (2 * a);
		return 'x1=x2=' + x1.toFixed(2);
	}

	else {
		x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
		x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
		return 'x1=' + x1.toFixed(2) + ';' + ' x2=' + x2.toFixed(2);
	}
}

quadraticEquation(['-1', '3', '0']);