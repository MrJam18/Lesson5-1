import { render } from "@testing-library/react";
import Messages from "../components/Messages";

it('test Messages to snapshot', () => {
    const messages = [
    {text: 'hello World', id: 123, author: 'user'},
    {text: 'hello man', id: 456, author: 'bot'},
    {text: 'how are you?', id: 789, author: 'user'},
    ]
    const component = render(
      <Messages messages = {messages} />
    );
    expect(component).toMatchSnapshot();
})