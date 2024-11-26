import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const reactPlugin = new ReactPlugin();

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "7b0da8da-fedf-4112-b09e-f73e82f17176", // مفتاح التتبع
    extensions: [reactPlugin],
    enableAutoRouteTracking: true, // تفعيل التتبع التلقائي للتصفح
  },
});

appInsights.loadAppInsights();

export { appInsights, reactPlugin };
