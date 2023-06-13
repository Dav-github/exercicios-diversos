import "./styles.css";
import { useLocalStorage } from "react-use";

export default function TestReactUse() {
    const [value, setValue, remove] = useLocalStorage("my-key", "foo");
    return (
        <>
            <div>Value: {value}</div>
            <button onClick={() => setValue("bar")}>bar</button>
            <button onClick={() => setValue("baz")}>baz</button>
            <button onClick={() => remove()}>Remove</button>
        </>
    );
}
