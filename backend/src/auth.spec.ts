import { describe, expect, it, vi } from "vitest";
import { requireAuth } from "./auth.js";

const buildReq = (token?: string) => ({
  headers: token ? { authorization: `Bearer ${token}` } : {},
});

describe("backend auth", () => {
  it("rejects requests without a token", () => {
    const req = buildReq();
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    const next = vi.fn();

    requireAuth(req as any, res as any, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: "Unauthorized" });
    expect(next).not.toHaveBeenCalled();
  });

  it("accepts the configured shared secret", () => {
    const req = buildReq("dev-secret");
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
    const next = vi.fn();

    requireAuth(req as any, res as any, next);

    expect(next).toHaveBeenCalledTimes(1);
    expect(res.status).not.toHaveBeenCalled();
  });
});
