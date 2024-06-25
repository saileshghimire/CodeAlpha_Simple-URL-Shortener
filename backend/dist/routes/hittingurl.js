"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const hitting = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
hitting.get('/:shortId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { shortId } = req.params;
    try {
        const url = yield prisma.table.findFirst({
            where: {
                shortId: shortId
            },
            select: {
                originalUrl: true
            }
        });
        if (!url) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        return res.redirect(url.originalUrl);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to redirect to original URL' });
    }
}));
exports.default = hitting;
