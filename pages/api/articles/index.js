import { articles } from "../../../data";

export default function handlers(req, res) {
  res.status(200).json(articles);
}
