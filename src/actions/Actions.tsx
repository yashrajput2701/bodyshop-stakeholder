import Utils from "../utils";
export const GETRECOMMENDEDDATA = () => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      Utils.showAlert(3, "PLEASE_CHECK_INTERNET");
      return;
    }
    // debugger;
    let data = `?value=vr&limit=10`;
    //@ts-ignore
    // setAccessToken(sessionStorage.getItem("access-token"));
    Utils.api.getApiCall(
      Utils.endPoints.recommendedData,
      data,
      (respData: any) => {
        // debugger;
        let { data } = respData;
        if (data.statusCode === Utils.constants.api_success_code.success) {
          console.log("GETRECOMMENDEDDATA", data.data);
          dispatch({type: Utils.ActionName.GETRECOMMENDEDDATA,payload:{apidata:data}})
        } else {
          if (
            data.alertType !==
            Utils.constants.response_alert.ALERT_WITHOUT_ACTION
          ) {
            Utils.showAlert(2);
          }
        }
      },
      (error: any) => {
        let { data } = error;
        if (
          data.alertType !== Utils.constants.response_alert.ALERT_WITHOUT_ACTION
        ) {
          Utils.showAlert(2, data.message);
        }
      }
    );
  };
};
