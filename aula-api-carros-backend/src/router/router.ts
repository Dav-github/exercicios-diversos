import { Router } from "express";
import {
    deleteCars,
    detailCar,
    listCars,
    registerCars,
    updateCars,
} from "../controllers/Cars";

const router = Router();

router.get("/carros", listCars);
router.get("/carros/:id", detailCar);
router.post("/carros", registerCars);
router.put("/carros/:id", updateCars);
router.delete("/carros/:id", deleteCars);

export default router;
