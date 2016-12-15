<?php
/**
 * Hooks for KwikiContextMenu extension
 *
 * @file
 * @ingroup Extensions
 */

class KwikiContextMenuHooks {
	public static function onBeforePageDisplay( OutputPage &$out, Skin &$skin) {
        $out->addModules( array( "ext.KwikiContextMenu" ) );       
		return true;
	}
}
