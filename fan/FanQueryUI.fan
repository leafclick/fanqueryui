using fanquery

@Js
mixin FanQueryUI
{
    JqBase draggable([Str:Obj]? props := null)
    {
        JqBase self := (Obj)this
        return FanQueryUINative.draggable(self, props)
    }

    JqBase droppable([Str:Obj]? props := null)
    {
        JqBase self := (Obj)this
        return FanQueryUINative.droppable(self, props)
    }

    JqBase resizable([Str:Obj]? props := null)
    {
        JqBase self := (Obj)this
        return FanQueryUINative.resizable(self, props)
    }

    JqBase selectable([Str:Obj]? props := null)
    {
        JqBase self := (Obj)this
        return FanQueryUINative.selectable(self, props)
    }

    JqBase sortable([Str:Obj]? props := null)
    {
        JqBase self := (Obj)this
        return FanQueryUINative.sortable(self, props)
    }
}

@Js
class FanQueryUINative
{
    native static JqBase draggable(JqBase self, [Str:Obj]? props := null)
    native static JqBase droppable(JqBase self, [Str:Obj]? props := null)
    native static JqBase resizable(JqBase self, [Str:Obj]? props := null)
    native static JqBase selectable(JqBase self, [Str:Obj]? props := null)
    native static JqBase sortable(JqBase self, [Str:Obj]? props := null)
}
