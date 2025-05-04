from pydantic_settings import BaseSettings
from pydantic import Field


class Settings(BaseSettings):
    environment: str = Field(..., alias="ENVIRONMENT")
    secret_key: str = Field(..., alias="SECRET_KEY")
    mongodb_url: str = Field(..., alias="MONGODB_URL")
    google_client_id: str = Field(..., alias="GOOGLE_CLIENT_ID")
    google_client_secret: str = Field(..., alias="GOOGLE_CLIENT_SECRET")
    google_redirect_uri_local: str = Field(..., alias="GOOGLE_REDIRECT_URI_LOCAL")
    google_redirect_uri_prod: str = Field(..., alias="GOOGLE_REDIRECT_URI_PROD")

    @property
    def google_redirect_uri(self) -> str:
        return (
            self.google_redirect_uri_prod
            if self.environment == "production"
            else self.google_redirect_uri_local
        )

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
