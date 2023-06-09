export default function calc(event, state, setState) {
  //
  //global vars
  const value = event.target.value;
  const type = event.target.attributes.type.value;

  if (value === "H") {
    setState((prev) => ({
      ...prev,
      history: {
        ...prev.history,
        status: prev.history.status ? false : true,
      },
    }));
    return;
  }

  if (value === "AC") {
    setState((prev) => {
      const defaultState = prev.defaultState;
      return {
        defaultState,
        ...defaultState,
        history: {
          status: false,
          value: JSON.parse(localStorage.getItem("history")) ?? [],
        },
      };
    });
    return;
  }

  if (value === "\u2297" /** x */) {
    setState((prev) => {
      let jsLast;
      if (prev.jsOperation.endsWith("Math.PI")) {
        jsLast = prev.jsOperation.lastIndexOf("Math.PI");
      } else if (prev.jsOperation.endsWith("Math.sqrt")) {
        jsLast = prev.jsOperation.lastIndexOf("Math.sqrt");
      } else {
        jsLast =
          prev.jsOperation.length === 0 ? 0 : prev.jsOperation.length - 1;
      }

      return {
        ...prev,
        userOperation: prev.userOperation.slice(
          0,
          prev.userOperation.length - 1
        ),
        jsOperation: prev.jsOperation.slice(0, jsLast),
        isFinshed: false,
      };
    });
    return;
  }

  if (value === "\u03C0" /** PI */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value,
      jsOperation: prev.jsOperation + "Math.PI",
    }));
    return;
  }

  if (value === "\u00D7" /** * */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value,
      jsOperation: prev.jsOperation + "*",
    }));
    return;
  }

  if (value === "\u00F7" /** / */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value,
      jsOperation: prev.jsOperation + "/",
    }));
    return;
  }

  if (value === "^" /** ** */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value,
      jsOperation: prev.jsOperation + "**",
    }));
    return;
  }

  if (value === "\u221A" /** square */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value + "(",
      jsOperation: prev.jsOperation + "Math.sqrt(",
    }));
    return;
  }

  if (value === "=") {
    try {
      const pattern = /^([0-9]|\+|-|\*|\/|%|\.|\(|\)|(Math.PI)|(Math.sqrt))*$/g;

      const safeOperation = pattern.test(state.jsOperation)
        ? state.jsOperation
        : "";

      const finalResult = eval(safeOperation);

      if (finalResult || finalResult === 0) {
        //handle history in local storage
        const userOperation = state.userOperation;
        const savedHistory = localStorage.getItem("history");
        let history;
        if (savedHistory) {
          history = JSON.parse(savedHistory);
          history.unshift({ userOperation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        } else {
          history = [];
          history.unshift({ userOperation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        }

        // update state
        setState((prev) => ({
          ...prev,
          result: finalResult,
          isFinshed: true,
          history: {
            ...prev.history,
            value: JSON.parse(localStorage.getItem("history")),
          },
        }));
      }

      return;
    } catch (err) {
      setState((prev) => ({
        ...prev,
        userOperation: prev.userOperation,
        jsOperation: prev.jsOperation,
      }));
      return;
    }
  }

  if (state.isFinshed) {
    if (type === "operator") {
      setState((prev) => {
        // add paranthesis to result
        let newUserOperation = state.userOperation.split("");
        let newJsOperation = state.jsOperation.split("");

        newUserOperation.unshift("(");
        newJsOperation.unshift("(");

        newUserOperation.push(")");
        newJsOperation.push(")");

        newUserOperation = newUserOperation.join("");
        newJsOperation = newJsOperation.join("");
        return {
          ...prev,
          userOperation: newUserOperation + value,
          jsOperation: newJsOperation + value,
          result: "",
          isFinshed: false,
        };
      });
      return;
    }

    if (type === "operand") {
      setState((prev) => ({
        ...prev,
        userOperation: value,
        jsOperation: value,
        result: "",
        isFinshed: false,
      }));
      return;
    }
  }

  setState((prev) => ({
    ...prev,
    userOperation: prev.userOperation + value,
    jsOperation: prev.jsOperation + value,
  }));
  return;
}
