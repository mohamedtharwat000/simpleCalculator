export default function calc(event, state, setState) {
  const value = event.target.value;
  const type = event.target.attributes.type.value;
  const isOperationFinshed =
    state.operation.startsWith("(") && state.operation.endsWith(")");

  if (value === "AC") {
    setState({
      operation: "",
      result: "",
    });
    return;
  }

  if (value === "x") {
    setState((prev) => ({
      ...prev,
      operation: prev.operation.slice(0, prev.operation.length - 1),
    }));
    return;
  }

  if (value === "=") {
    const pattern = /^([0-9]|\+|-|\*|\/|%|\.|\(|\))*$/g;
    const rightoperation = pattern.exec(state.operation);

    try {
      const finalResult = eval(rightoperation[0]);
      let newoperation = state.operation.split("");
      newoperation.unshift("(");
      newoperation.push(")");
      newoperation = newoperation.join("");
      setState((prev) => ({
        operation: isOperationFinshed ? prev.operation : newoperation,
        result: finalResult,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
    return;
  }

  if (isOperationFinshed) {
    if (type === "operator") {
      setState((prev) => ({
        operation: prev.operation + value,
        result: "",
      }));
      return;
    }

    if (type === "operand") {
      setState((prev) => ({
        operation: value,
        result: "",
      }));
      return;
    }
  }

  if (value) {
    setState((prev) => ({
      operation: prev.operation + value,
      result: "",
    }));
    return;
  }
}
