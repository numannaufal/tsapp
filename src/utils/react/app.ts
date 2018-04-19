import * as ReactDOM from 'react-dom';

export default class ReactApp {
  protected reactComponent: JSX.Element;
  protected htmlElementToRender: HTMLElement;

  public render(props?: Function): void {
    ReactDOM.render(this.reactComponent, this.htmlElementToRender);    
  }

  public htmlId(id: string): ReactApp {
    this.htmlElementToRender = document.getElementById(id) as HTMLElement;
    return this;
  }

  public component(ReactComponent: JSX.Element): ReactApp {
    this.reactComponent = ReactComponent;
    return this;
  } 
}