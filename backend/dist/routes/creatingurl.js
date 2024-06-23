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
const uuid_1 = require("uuid");
const created = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
created.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = req.body;
    const shortId = (0, uuid_1.v4)();
    const shortUrl = `http://localhost:300/${shortId}`;
    try {
        const existingUrl = yield prisma.table.findFirst({
            where: {
                originalUrl: url
            },
            select: {
                shortUrl: true
            }
        });
        if (!existingUrl) {
            return res.json({
                shortUrl: existingUrl
            });
        }
        const newUrl = yield prisma.table.create({
            data: {
                originalUrl: url,
                shortId: shortId,
                shortUrl: shortUrl
            }
        });
        return res.json({
            shortUrl: shortUrl
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to create short URL' });
    }
}));
exports.default = created;
