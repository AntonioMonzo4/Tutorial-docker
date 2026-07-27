docker build -t hola-docker . 
PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\hola-docker> docker build -t hola-docker . 
[+] Building 2.3s (6/6) FINISHED                                                                                                                           docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                       0.0s
 => => transferring dockerfile: 81B                                                                                                                                        0.0s
 => [internal] load metadata for docker.io/library/alpine:latest                                                                                                           1.6s
 => [auth] library/alpine:pull token for registry-1.docker.io                                                                                                              0.0s
 => [internal] load .dockerignore                                                                                                                                          0.0s
 => => transferring context: 2B                                                                                                                                            0.0s
 => [1/1] FROM docker.io/library/alpine:latest@sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b                                                     0.4s
 => => resolve docker.io/library/alpine:latest@sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b                                                     0.0s
 => => sha256:55afa1ecc21d2bb5e5045f32dafee56272ffd89860bac26f6c32123439af26a4 3.85MB / 3.85MB                                                                             0.4s
 => exporting to image                                                                                                                                                     0.5s
 => => exporting layers                                                                                                                                                    0.0s
 => => exporting manifest sha256:f9f87015c266070f548917df00f0da415527fbe8811b0679c9e6b910b926dcb1                                                                          0.0s
 => => exporting config sha256:e37cf1fda1af4e9568e9b5c0a6ffd78b5e6eb827b4453e4721cf2939434e8752                                                                            0.0s
 => => exporting attestation manifest sha256:f8b4a5bedf3d6ad3e806135d1e8c1a629566e3abff46ffea3294060c89a08cc7                                                              0.0s
 => => exporting manifest list sha256:4a20d516567c56b1c60a688f2953cb34e50a63dfa3cd4cb8370ece4367aeeadf                                                                     0.0s
 => => naming to docker.io/library/hola-docker:latest                                                                                                                      0.0s
 => => unpacking to docker.io/library/hola-docker:latest                                                                                                                   0.5s

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/wtffb4dndzl1o882votk3i9dl





docker run --rm hola-docker 
PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\hola-docker> docker run --rm hola-docker 
Hola, Docker!
