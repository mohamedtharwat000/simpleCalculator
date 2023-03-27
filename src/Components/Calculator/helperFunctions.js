export default function calc(event, state, setState) {
  //
  //global vars
  const value = event.target.value;
  const type = event.target.attributes.type.value;

  const isUserFinshed =
    state.userOperation.startsWith("(") && state.userOperation.endsWith(")");
  const isJsFinshed =
    state.jsOperation.startsWith("(") && state.jsOperation.endsWith(")");

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
        ...prev,
        ...defaultState,
      };
    });
    return;
  }

  if (value === "\u2297" /** x */) {
    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation.slice(0, prev.userOperation.length - 1),
      jsOperation: prev.jsOperation.slice(0, prev.jsOperation.length - 1),
    }));
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

      let newUserOperation = state.userOperation.split("");
      let newJsOperation = state.jsOperation.split("");

      newUserOperation.unshift("(");
      newJsOperation.unshift("(");

      newUserOperation.push(")");
      newJsOperation.push(")");

      newUserOperation = newUserOperation.join("");
      newJsOperation = newJsOperation.join("");

      setState((prev) => ({
        ...prev,
        result: finalResult,

        userOperation:
          isUserFinshed || prev.userOperation === ""
            ? prev.userOperation
            : newUserOperation,

        jsOperation:
          isJsFinshed || prev.jsOperation === ""
            ? prev.jsOperation
            : newJsOperation,
      }));

      if (finalResult) {
        const userOperation = state.userOperation;
        const savedHistory = localStorage.getItem("history");
        let history;
        if (savedHistory) {
          history = JSON.parse(savedHistory);
          history.push({ userOperation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        } else {
          history = [];
          history.push({ userOperation, finalResult });
          localStorage.setItem("history", JSON.stringify(history));
        }
      }
      return;
    } catch (err) {
      setState((prev) => ({
        ...prev,
        userOperation: prev.userOperation,
        jsOperation: prev.jsOperation,
      }));
    }
  }

  if (value) {
    if (isUserFinshed && isJsFinshed) {
      if (type === "operator") {
        setState((prev) => ({
          ...prev,
          userOperation: prev.userOperation + value,
          jsOperation: prev.jsOperation + value,
          result: "",
        }));
        return;
      }

      if (type === "operand") {
        setState((prev) => ({
          ...prev,
          userOperation: value,
          jsOperation: value,
          result: "",
        }));
        return;
      }
    }

    if (value === "=") {
      setState((prev) => ({
        ...prev,
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      userOperation: prev.userOperation + value,
      jsOperation: prev.jsOperation + value,
    }));
    return;
  }
}
