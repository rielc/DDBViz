function map(x, xmin, xmax, ymin, ymax, bound, log) {
	// make sure return value is withiin ymin and ymax
	if (typeof bound === "undefined") bound = false;
	if (typeof log === "undefined") log = false;

	// if (xmin==xmax) return (ymin+ymax)/2
	if (xmin == xmax) return ymax;

	var y, m, n;

	if (log) {
		var logxmax = Math.log(xmax+1);
		var logxmin = Math.log(xmin+1);
		m           = ( ymax / logxmax - ymin) / (1 - logxmin );
		n           = ymin - m*logxmin;
		y           = m * Math.log(x+1) + n;
	}
	else {
		m           = (ymax - ymin) / (xmax - xmin);
		n           = -xmin * m + ymin;
		y           = x * m + n;
	}

	if (bound) {
		if (ymin<ymax) {
			y          = Math.min(ymax, y);
			y          = Math.max(ymin, y);
		}
		else {
			y          = Math.max(ymax, y);
			y          = Math.min(ymin, y);
		}
	}

	return y;
}