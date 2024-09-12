interface IGetDashboardParamsDTO {
  userId: string;
}

interface IGetBoardParamsDTO {
  boardId: string;
}
interface IGetDashboardRes {
  count: number;
  data: IGetDashboardData[];
}
interface IGetDashboardData {
  id: string;
  title: string;
  description: string;
  labels: string[] | [];
  background: string;
}

interface IGetBoardDTO {
  data: IBoard[];
  count: number;
}

type IGetBoardRes = IBoard;
