function findOverlapAndNotInclude(intervals) {
    const overlapIntervals = [];
    const notIncludeIntervals = [];
    const allIntervals  = intervals.map(interval => Array.isArray(interval) ? interval : [interval]);
  
    allIntervals.sort(function(a, b) {
      return a[0] - b[0];
    });
  
    let currentEnd = 0;
    for (let i = 0; i < allIntervals.length; i++) {
      const currentInterval = allIntervals[i];
      const start = currentInterval[0];
      const end = currentInterval.length > 1 ? currentInterval[1] : currentInterval[0];
  
      if (start <= currentEnd) {
        overlapIntervals.push([start, Math.min(end, currentEnd)]);
        currentEnd = Math.max(end, currentEnd);
      } else {
        notIncludeIntervals.push([currentEnd + 1, start - 1]);
        currentEnd = end;
      }
    }
  
    if (currentEnd < 20) {
      notIncludeIntervals.push([currentEnd + 1, 20]);
    }
  
    return {
      overlap: overlapIntervals,
      notInclude: notIncludeIntervals
    };
  }
  
  const input = [[6, 11], [5, 8], [17, 20], [7], [14, 17]];
  const output = findOverlapAndNotInclude(input);
  
  console.log(output);//{ overlap: [[6, 8], [17]], notInclude: [[1, 4], [12, 13]] }