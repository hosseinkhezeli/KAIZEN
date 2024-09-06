interface IGetBoardParamsDTO {
  userId: string;
}
interface IGetDashboardParamsDTO {
  userId: string;
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

interface IGetBoardSingeParamsDTO {
  boardId: string;
}

interface IGetBoardSingleDTO {
  data: IBoard;
}
