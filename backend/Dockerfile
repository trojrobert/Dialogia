# # Use an official Python runtime as a base image
# FROM python:3.10

# # Install zip package
# RUN apt-get update && apt-get install -y zip && rm -rf /var/lib/apt/lists/*

# # Set the working directory in the container
# WORKDIR /app

# # Copy the requirements.txt file into the container
# COPY requirements.txt /app/requirements.txt

# # Install Python dependencies
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the .env file from two folders up
# COPY .env .

# # Zip the installed dependencies
# RUN mkdir /app/dependencies \
#     && pip install --no-cache-dir -r requirements.txt -t ./python \
#     && cd /app/dependencies \
#     && zip -r /app/layer.zip ./python/

# # Clean up
# RUN rm -rf /app/dependencies \
#     && rm -rf /root/.cache/pip

# # Set the entry point to /bin/bash
# ENTRYPOINT ["/bin/bash", "-l"]


FROM amazonlinux:2

# Install Python
RUN yum install -y python3 && \
    yum install -y python3-pip && \
    yum install -y zip && \
    yum clean all

# Set up PIP and Venv
RUN python3 -m pip install --upgrade pip && \
    python3 -m pip install virtualenv
RUN python3 -m venv base
RUN source base/bin/activate

# Install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt -t ./python

# Copy the .env file from two folders up
COPY .env ./python/

# Zip it up for deployment.
RUN zip -r layer.zip ./python/
ENTRYPOINT ["/bin/bash", "-l"]