const getReversedBracket = (bracket: string) => {
  switch (bracket) {
    case "{":
      return "}";
    case "}":
      return "{";
    case "[":
      return "]";
    case "]":
      return "[";
    case "(":
      return ")";
    case ")":
      return "(";
    default:
      return "";
  }
};

const isLeftBracket = (bracket: string): boolean =>
  bracket === "{" || bracket === "[" || bracket === "(";

const validateBrackets = (brackets: string): boolean => {
  let stack: string[] = [];
  for (let i = 0; i < brackets.length; i++) {
    const reversedBracket = getReversedBracket(brackets[i]);
    if (isLeftBracket(brackets[i])) {
      stack.push(brackets[i]);
    } else if (stack.length === 0 || stack.pop() !== reversedBracket) {
      return false;
    }
  }
  return stack.length === 0;
};

console.log(validateBrackets("[{()}[()]()]"));
