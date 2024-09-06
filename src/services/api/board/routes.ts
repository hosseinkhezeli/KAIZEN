export const routes = {
  dashboard: ({ userId }: IGetDashboardParamsDTO) =>
    `/boards/dashboard/data?userId=${userId}`,
};
