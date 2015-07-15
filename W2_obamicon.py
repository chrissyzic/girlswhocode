import Myro
from Myro import *
from Graphics import *
from random import *

obama_darkBlue = makeColor(0,51,76)
obama_red = makeColor(217, 26, 33)
obama_blue = makeColor(112,150,158)
obama_yellow = makeColor(252, 227, 166)

pic = makePicture("selfie.jpg")

show(pic)

pixel_list = getPixels(pic)

for spot in pixel_list:
    grey_val = (getRed(spot) + getGreen(spot) + getBlue(spot)) / 3
    if grey_val > 180:
        setColor(spot, obama_yellow)
    elif grey_val > 120:
        setColor(spot, obama_blue)
    elif grey_val > 60:
        setColor(spot, obama_red)
    else:
        setColor(spot, obama_darkBlue)

show(pic)
