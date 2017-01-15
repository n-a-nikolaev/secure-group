export const ListServicesTemplate: string = `
    <ul class="list-sevices row row-no-gutter">
        <%for(var service in this.services) {%>
            <li class="service-box col-sm-6 col-md-4 ta-center">
                <i class="service-box--icon <% this.services[service]['icon'] %>"></i>
                <h3 class="service-box--title tt-upper"><% this.services[service]['title'] %></h3>
                <p class="service-box--desc"><% this.services[service]['shortDescription'] %></p>
                <button type="button" class="service-box--button" data-service-id="<% this.services[service]['id'] %>">
                    <i class="icon-resize-full"></i>
                </button>
            </li>
        <%}%>
    </ul>
`