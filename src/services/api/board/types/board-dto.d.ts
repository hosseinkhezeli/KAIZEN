interface IGetBoardParamsDTO {
  userId: string;
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
