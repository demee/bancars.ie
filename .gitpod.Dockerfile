FROM gitpod/workspace-full:latest

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 18 \
    && nvm use 18 \
    && nvm alias default 18"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
