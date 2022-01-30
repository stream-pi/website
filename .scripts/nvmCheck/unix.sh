export NVM_DIR=$HOME/.nvm
source $NVM_DIR/nvm.sh

echo "Checking your system for \033[1mNVM\033[0m"

sleep 2
# Check for NVM
nvm -v &> /dev/null || {
  echo "\033[1;33mNVM\033[0m \033[33mCould not be detected automatically\033[0m"
  echo "\033[33mIf you are sure you have it installed, please continue manually with: \033[1m'nvm use'\033[0m"
  echo "\033[33mOtherwise, please install \033[1mNode 16.13.0\033[0m \033[33mwith \033[1mNPM 8.1.0\033[0m"
  exit 1
}

# Use the right version
nvm -v
nvm use 16.13.0 || nvm install 16.13.0 && nvm use 16.13.0
