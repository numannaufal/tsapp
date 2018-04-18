import * as ReactDOM from 'react-dom';

export default class ReactApp {
  protected static instance: ReactApp;
  protected reactComponent: JSX.Element;
  protected htmlElementToRender: HTMLElement;

  protected static getInstance() {
    if (this.instance === undefined) {
      this.instance = new ReactApp();
      return this.instance;
    } else {
      return this.instance;
    }
  }

  public render(): void {
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