fan.fanqueryui.UIPeer = fan.sys.Obj.$extend(fan.sys.Obj);

//noinspection JSUnusedGlobalSymbols
fan.fanqueryui.UIPeer.prototype.setSelector = function (self, obj, context) {
    var con = undefined;
    if (context) {
        con = context.selector;
    }

    if (obj) {
        if (obj.cur != undefined) {
            self.selector = $(obj.cur, con);
        }
        else {
            self.selector = $(obj, con);
        }
    }
};

fan.fanqueryui.UIPeer.prototype.helper = function (self) {
    return convertToJq(self.m_delegate.selector[0].helper);
};

fan.fanqueryui.UIPeer.prototype.draggable = function (self) {
    return convertToJq(self.m_delegate.selector[0].draggable);
};

fan.fanqueryui.UIPeer.prototype.position = function (self) {
    var position = self.m_delegate.selector[0].position();
    return fan.fanquery.Coordinate.make(position.left, position.top)
};

fan.fanqueryui.UIPeer.prototype.offset = function (self) {
    var offset = self.m_delegate.selector[0].offset();
    return fan.fanquery.Coordinate.make(offset.left, offset.top)
};

