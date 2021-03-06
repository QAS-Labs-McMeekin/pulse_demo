interface JQuery {
    dropdown(options?: any): JQuery;
    dropdown(action: string, value: any): JQuery;
    dropdown(action: string, ...values: any[]): JQuery;
    popup(options?: any): JQuery;
    modal(options?: any): JQuery;
    sidebar(options?: any): JQuery;
    sidebar(...options: any[]): JQuery;
    tab(options?: any): JQuery;
    fixSidebar(): JQuery;
}
