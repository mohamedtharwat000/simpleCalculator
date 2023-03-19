export default function calc(event, state, setState) {
  const value = event.target.value;

  if (value === "AC") {
    setState({
      opration: "",
      result: "",
    });
    return;
  }

  if (value === "x") {
    setState((prev) => ({
      ...prev,
      opration: prev.opration.slice(0, prev.opration.length - 1),
    }));
    return;
  }

  if (value === "=") {
    const pattern =
      /^([0-9]|\+|\-|\*|\/|\%|\.|\(|\))+([0-9]|\+|\-|\*|\/|\%|\.|\(|\))$/g;

    const rightOpration = pattern.exec(state.opration);

    try {
      const finalResult = eval(rightOpration[0]);
      setState((prev) => ({
        ...prev,
        result: finalResult,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }

    return;
  }

  if (value) {
    setState((prev) => ({
      ...prev,
      opration: prev.opration + value,
    }));
    return;
  }
}
