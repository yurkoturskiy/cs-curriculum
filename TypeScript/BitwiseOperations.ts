/* Bitwise OR operator */
{
  console.log("Bitwise OR:");
  const a = 0b0001; // 0b0001 = 1
  const b = 0b0010; // 0b0010 = 2
  const ab = a | b; // 0b0011 = 3
  console.table({
    a: `0b0001 = ${a}`,
    b: `0b0010 = ${b}`,
    "a | b": `0b0011 = ${ab}`,
  });
}

/* Bitwise AND operator */
{
  console.log("Bitwise AND:");
  const a = 0b0011; // 0b0011 = 3
  const b = 0b0010; // 0b0010 = 2
  const ab = a & b; // 0b0010 = 2
  console.table({
    a: `0b0011 = ${a}`,
    b: `0b0010 = ${b}`,
    "a & b": `0b0010 = ${ab}`,
  });
}

/* Bitwise XOR operator */
{
  console.log("Bitwise XOR:");
  const a = 0b0011; // 0b0011 = 3
  const b = 0b0110; // 0b0110 = 6
  const ab = a ^ b; // 0b0101 = 5
  console.table({
    a: `0b0011 = ${a}`,
    b: `0b0110 = ${b}`,
    "a ^ b": `0b0101 = ${ab}`,
  });
}

/* Bitwise NOT operator */
{
  console.log("Bitwise NOT:");
  const a = 3;
  const notA = ~a; // -4
  const b = -5;
  const notB = ~b; // 4
  console.table({
    a: `00000000000000000000000000000011 = ${a}`,
    "~a": `11111111111111111111111111111100 = ${notA}`,
    b: `11111111111111111111111111111011 = ${b}`,
    "~b": `00000000000000000000000000000100 = ${notB}`,
  });
}

/* Shift operators */
{
  console.log("Shift operators:");
  const a = 0b0010; // 2
  const negA = ~0b0010; // -3
  console.table({
    a: `0b0010 = ${a}`, // 2
    "a << 1": `0b0100 = ${a << 1}`, // 3 // Left shift
    "a >> 1": `0b0001 = ${a >> 1}`, // 1 // Sign-propagating right shift
    "a >>> 1": `0b0001 = ${a >>> 1}`, // 1 // Zero-fill right shift

    // Difference between `>>>` and `>>` occurs on a negative number
    negA: `11111111111111111111111111111101 = -3        `, // -3
    "negA >>> 1": `01111111111111111111111111111110 = ${negA >>> 1}`, // 2147483646 // Zero-fill right shift
    "negA >> 1": `11111111111111111111111111111110 = ${negA >> 1}        `, // -2 // Sign-propagating right shift
  });
}
