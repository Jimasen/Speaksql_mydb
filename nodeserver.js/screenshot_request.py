from pydantic import BaseModel

class ScreenshotRequest(BaseModel):
    url: str
    email: str = None

